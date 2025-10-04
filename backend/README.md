# 🚀 TaskManager Backend

This is the backend API server for TaskManager - a RESTful API built with Node.js, Express, and MongoDB.

## ✨ Features

- 🟢 **Node.js & Express** - Fast, scalable server framework
- 🍃 **MongoDB & Mongoose** - NoSQL database with ODM
- 🔒 **CORS** - Cross-origin resource sharing support
- ⚡ **Rate Limiting** - API protection with Upstash Redis
- 🛡️ **Input Validation** - Request validation and sanitization
- 📝 **RESTful API** - Clean, predictable API endpoints
- 🔄 **Auto-restart** - Development server with nodemon

## 🏗️ Architecture

```
src/
├── 📁 config/         # Configuration files
│   └── 📄 db.js           # MongoDB connection setup
├── 📁 controllers/    # Business logic handlers
│   └── 📄 noteController.js # Note CRUD operations
├── 📁 models/         # Database schemas
│   └── 📄 Note.js         # Note data model
├── 📁 routes/         # API route definitions
│   └── 📄 notesRoutes.js  # Note-related endpoints
└── 📄 server.js       # Main server entry point
```

## 📊 API Endpoints

### Notes API

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/api/notes` | Get all notes | - |
| `GET` | `/api/notes/:id` | Get note by ID | - |
| `POST` | `/api/notes` | Create new note | `{ title, content }` |
| `PUT` | `/api/notes/:id` | Update note | `{ title, content }` |
| `DELETE` | `/api/notes/:id` | Delete note | - |

### Request/Response Examples

#### Create Note
```bash
POST /api/notes
Content-Type: application/json

{
  "title": "My First Note",
  "content": "This is the content of my first note."
}
```

#### Response
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "My First Note",
  "content": "This is the content of my first note.",
  "createdAt": "2025-01-01T00:00:00.000Z",
  "updatedAt": "2025-01-01T00:00:00.000Z"
}
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure environment variables (see below)
# Start development server
npm run dev

# Server runs on http://localhost:5001
```

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start server with nodemon (auto-restart)
npm start            # Start production server

# Database
npm run db:seed      # Seed database with sample data (if implemented)
npm run db:reset     # Reset database (if implemented)
```

## 🔧 Environment Variables

Create a `.env` file in the backend root:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/taskmanager
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager

# Server
PORT=5001
NODE_ENV=development

# CORS
CORS_ORIGIN=http://localhost:5173,https://riteshkumar34.github.io

# Rate Limiting (Optional - Upstash Redis)
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

### Environment Variables Explained

- **MONGODB_URI**: Your MongoDB connection string
- **PORT**: Server port (default: 5001)
- **NODE_ENV**: Environment (development/production)
- **CORS_ORIGIN**: Allowed origins for CORS (comma-separated)
- **UPSTASH_REDIS_***: Optional Redis configuration for rate limiting

## 🗄️ Database Schema

### Note Model
```javascript
{
  _id: ObjectId,           // Auto-generated MongoDB ID
  title: String,           // Note title (required)
  content: String,         // Note content (required)
  createdAt: Date,         // Auto-generated creation timestamp
  updatedAt: Date          // Auto-updated modification timestamp
}
```

### Example Document
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Meeting Notes",
  "content": "Discussed project timeline and deliverables...",
  "createdAt": "2025-01-01T10:30:00.000Z",
  "updatedAt": "2025-01-01T10:30:00.000Z"
}
```

## 🔒 Security Features

### Rate Limiting
- Uses Upstash Redis for distributed rate limiting
- Configurable limits per endpoint
- Prevents API abuse and DDoS attacks

### CORS Configuration
- Configurable allowed origins
- Supports credentials for authenticated requests
- Preflight request handling

### Input Validation
- Request body validation
- Parameter sanitization
- Error handling with proper HTTP status codes

## 🚀 Deployment Options

### Option 1: Railway (Recommended)
```bash
# 1. Connect GitHub repository to Railway
# 2. Set environment variables in Railway dashboard
# 3. Deploy automatically on git push
```

### Option 2: Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

### Option 3: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Option 4: DigitalOcean App Platform
```bash
# 1. Connect GitHub repository
# 2. Configure build and run commands
# 3. Set environment variables
# 4. Deploy
```

## 📊 Performance Optimization

### Database Optimization
- MongoDB indexing on frequently queried fields
- Connection pooling for efficient database connections
- Query optimization for large datasets

### Server Optimization
- Express.js middleware optimization
- Response compression
- Efficient error handling

### Monitoring
- Request logging for debugging
- Performance metrics tracking
- Error rate monitoring

## 🧪 Testing

### API Testing with curl
```bash
# Get all notes
curl -X GET http://localhost:5001/api/notes

# Create a note
curl -X POST http://localhost:5001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Note","content":"Test content"}'

# Get specific note
curl -X GET http://localhost:5001/api/notes/NOTE_ID

# Update note
curl -X PUT http://localhost:5001/api/notes/NOTE_ID \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","content":"Updated content"}'

# Delete note
curl -X DELETE http://localhost:5001/api/notes/NOTE_ID
```

### Using Postman
Import the following collection for easy testing:
- Base URL: `http://localhost:5001`
- Set up environment variables for dynamic testing

## 🔍 Troubleshooting

### Common Issues

#### Database Connection Failed
```bash
# Check MongoDB service status
sudo systemctl status mongod

# Verify connection string
echo $MONGODB_URI

# Test connection
mongosh $MONGODB_URI
```

#### Port Already in Use
```bash
# Find process using port 5001
lsof -i :5001

# Kill process
kill -9 PID
```

#### CORS Errors
- Verify CORS_ORIGIN includes your frontend URL
- Check preflight request handling
- Ensure credentials are properly configured

## 📈 Monitoring & Logging

### Development Logging
- Request/response logging with morgan
- Error stack traces in development
- Database query logging

### Production Monitoring
- Error tracking with external services
- Performance monitoring
- Uptime monitoring

## 🔗 Related

- [Frontend Repository](../frontend) - React frontend application
- [Live API Documentation](your-api-docs-url) - API documentation
- [Database Schema](./docs/schema.md) - Detailed database documentation

---

Built with ❤️ using Node.js + Express + MongoDB
