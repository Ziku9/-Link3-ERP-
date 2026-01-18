# Link3 Sambhuganj ERP System

A professional full-stack ERP system for Link3 Sambhuganj branch management, built with Next.js, Node.js, and MongoDB.

## Features

- 📊 **Dashboard** - Real-time business metrics
- 👥 **Client Management** - Track clients and materials
- ✅ **Attendance System** - Team member attendance tracking
- 🚌 **Travel Expenses** - Manage transportation costs
- 💰 **Branch Expenses** - Track operational expenses
- 🗄️ **Database** - MongoDB for secure data storage
- 🚀 **Cloud Ready** - Deployed on Vercel & GitHub

## Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Modern styling
- **Vercel** - Deployment

### Backend
- **Node.js & Express** - API server
- **MongoDB** - Database
- **Mongoose** - ODM
- **dotenv** - Environment variables

## Project Structure

```
Link3-ERP/
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/      # Pages & layouts
│   │   ├── components/ # React components
│   │   └── lib/      # Utilities
│   └── package.json
├── backend/          # Node.js API
│   ├── src/
│   │   ├── models/   # MongoDB schemas
│   │   ├── routes/   # API routes
│   │   ├── controllers/ # Business logic
│   │   └── server.js # Entry point
│   └── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free at mongodb.com)
- Git

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

Start the backend:
```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

## API Endpoints

### Dashboard
- `GET /api/stats` - Get dashboard statistics

### Clients
- `POST /api/clients` - Create new client
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get specific client

### Materials
- `POST /api/materials` - Record material entry
- `GET /api/materials` - Get all materials

### Attendance
- `POST /api/attendance` - Record attendance
- `GET /api/attendance` - Get attendance records

### Travel Expenses
- `POST /api/travel` - Add travel expense
- `GET /api/travel` - Get travel records

### Branch Expenses
- `POST /api/expenses` - Add expense
- `GET /api/expenses` - Get all expenses

## Deployment

### Vercel (Frontend)

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables
4. Deploy automatically on push

### MongoDB Atlas

1. Create free cluster at mongodb.com
2. Get connection string
3. Add to backend `.env`
4. Backend can be hosted on Railway, Render, or Heroku

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/link3
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Git Commands

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit"

# Add GitHub remote
git remote add origin https://github.com/yourusername/Link3-ERP.git
git branch -M main
git push -u origin main
```

## Support

For issues or questions, contact the development team.

---
**Built with ❤️ for Link3 Sambhuganj**
