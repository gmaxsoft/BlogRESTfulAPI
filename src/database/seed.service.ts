import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Post } from '../posts/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async seed() {
    // Clear existing data
    await this.commentRepository.clear();
    await this.postRepository.clear();
    await this.userRepository.clear();

    // Create users (max 10)
    const users = await this.createUsers(10);
    console.log(`Created ${users.length} users`);

    // Create posts (max 50)
    const posts = await this.createPosts(users, 50);
    console.log(`Created ${posts.length} posts`);

    // Create comments (max 40)
    const comments = await this.createComments(users, posts, 40);
    console.log(`Created ${comments.length} comments`);

    console.log('Database seeded successfully!');
  }

  private async createUsers(count: number): Promise<User[]> {
    const users: User[] = [];
    const hashedPassword = await bcrypt.hash('password123', 10);

    const userData = [
      { email: 'john.doe@example.com', username: 'johndoe' },
      { email: 'jane.smith@example.com', username: 'janesmith' },
      { email: 'bob.johnson@example.com', username: 'bobjohnson' },
      { email: 'alice.williams@example.com', username: 'alicewilliams' },
      { email: 'charlie.brown@example.com', username: 'charliebrown' },
      { email: 'diana.prince@example.com', username: 'dianaprince' },
      { email: 'edward.norton@example.com', username: 'edwardnorton' },
      { email: 'fiona.apple@example.com', username: 'fionaapple' },
      { email: 'george.martin@example.com', username: 'georgemartin' },
      { email: 'helen.troy@example.com', username: 'helentroy' },
    ];

    for (let i = 0; i < Math.min(count, userData.length); i++) {
      const user = this.userRepository.create({
        email: userData[i].email,
        username: userData[i].username,
        password: hashedPassword,
      });
      users.push(await this.userRepository.save(user));
    }

    return users;
  }

  private async createPosts(users: User[], count: number): Promise<Post[]> {
    const posts: Post[] = [];
    const titles = [
      'Getting Started with NestJS',
      'Understanding TypeORM Relations',
      'Building RESTful APIs',
      'Authentication with JWT',
      'Database Design Best Practices',
      'Testing in NestJS',
      'Deploying Node.js Applications',
      'Microservices Architecture',
      'GraphQL vs REST',
      'Docker for Developers',
      'CI/CD with GitHub Actions',
      'TypeScript Advanced Features',
      'Clean Code Principles',
      'API Security Best Practices',
      'Performance Optimization',
      'Error Handling Strategies',
      'Logging and Monitoring',
      'Caching Strategies',
      'Message Queues',
      'Event-Driven Architecture',
      'Domain-Driven Design',
      'SOLID Principles',
      'Design Patterns',
      'Code Review Tips',
      'Agile Development',
      'Version Control Best Practices',
      'Documentation Standards',
      'Code Refactoring',
      'Technical Debt Management',
      'Team Collaboration',
      'Project Management',
      'Software Architecture',
      'Cloud Computing',
      'Serverless Functions',
      'Container Orchestration',
      'Database Migrations',
      'API Versioning',
      'Rate Limiting',
      'WebSocket Communication',
      'Real-time Applications',
      'Progressive Web Apps',
      'Mobile Backend Development',
      'Third-party Integrations',
      'Payment Processing',
      'Email Services',
      'File Upload Handling',
      'Image Processing',
      'Search Functionality',
      'Analytics Integration',
      'A/B Testing',
    ];

    const contents = [
      'NestJS is a progressive Node.js framework for building efficient and scalable server-side applications.',
      'TypeORM provides powerful features for managing database relationships and queries.',
      'RESTful APIs follow specific conventions that make them easy to understand and use.',
      'JWT authentication provides a secure way to handle user sessions without server-side storage.',
      'Good database design is crucial for application performance and maintainability.',
      'Comprehensive testing ensures your application works correctly and prevents regressions.',
      'Deployment strategies vary depending on your infrastructure and requirements.',
      'Microservices allow you to build scalable and maintainable applications.',
      'Both GraphQL and REST have their strengths depending on your use case.',
      'Docker simplifies development and deployment by containerizing applications.',
    ];

    for (let i = 0; i < Math.min(count, titles.length); i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const post = this.postRepository.create({
        title: titles[i],
        content: contents[i % contents.length] + ` This is post number ${i + 1} with detailed content about ${titles[i]}.`,
        authorId: randomUser.id,
      });
      posts.push(await this.postRepository.save(post));
    }

    return posts;
  }

  private async createComments(
    users: User[],
    posts: Post[],
    count: number,
  ): Promise<Comment[]> {
    const comments: Comment[] = [];
    const commentTexts = [
      'Great post! Very informative.',
      'Thanks for sharing this.',
      'I have a question about this topic.',
      'This helped me a lot.',
      'Could you provide more examples?',
      'Excellent explanation!',
      'I disagree with some points.',
      'Looking forward to more content.',
      'This is exactly what I needed.',
      'Well written and clear.',
      'I found this very useful.',
      'Thanks for the detailed explanation.',
      'This cleared up my confusion.',
      'Great work!',
      'I learned something new today.',
      'Very helpful, thank you!',
      'I have a different perspective.',
      'This is a great resource.',
      'Keep up the good work!',
      'I appreciate the effort.',
    ];

    for (let i = 0; i < Math.min(count, 40); i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomPost = posts[Math.floor(Math.random() * posts.length)];
      const comment = this.commentRepository.create({
        content: commentTexts[i % commentTexts.length],
        postId: randomPost.id,
        authorId: randomUser.id,
      });
      comments.push(await this.commentRepository.save(comment));
    }

    return comments;
  }
}
