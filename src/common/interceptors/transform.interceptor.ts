import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from 'express';

export interface Response<T> {
  data: T;
  timestamp: string;
  path: string;
  method: string;
  executionTime: string;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<
  T,
  Response<T>
> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest<Request>();
    const startTime = Date.now();

    return next.handle().pipe(
      map((data: T) => {
        const executionTime = Date.now() - startTime;
        return {
          data,
          timestamp: new Date().toISOString(),
          path: request.url,
          method: request.method,
          executionTime: `${executionTime}ms`,
        };
      }),
    );
  }
}
