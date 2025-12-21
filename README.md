# Blog Application

A complete, production-ready blog application built with Node.js, Express.js, and EJS templating. Features full CRUD functionality, responsive design, and modern UI.

## 🚀 Features

- **Create** - Add new blog posts with title and content validation
- **Read** - Display all posts on homepage and view individual post details
- **Update** - Edit existing posts with pre-filled forms
- **Delete** - Remove posts with confirmation prompts
- **Responsive Design** - Mobile, tablet, and desktop friendly layout
- **Modern UI** - Clean design with gradients, animations, and smooth hover effects
- **REST Architecture** - Proper HTTP methods (GET/POST) following REST conventions

## 🛠️ Tech Stack

- **Backend**: Node.js and Express.js for server-side routing and logic
- **Templating**: EJS for dynamic server-side rendering
- **Middleware**: Body-Parser for handling form submissions and POST requests
- **Frontend**: HTML5, CSS3 with modern responsive styling
- **Data Storage**: In-memory JavaScript arrays (session-based, no database required)

## 📁 Project Structure
blog-app/
├── server.js # Express server with all CRUD routes
├── views/
│ ├── layout.ejs # Base template with navbar and footer
│ ├── index.ejs # Homepage displaying all posts
│ ├── new.ejs # Create new post form
│ ├── edit.ejs # Edit post form
│ └── show.ejs # Single post view with actions
├── public/
│ └── style.css # Responsive styling with modern design
└── package.json # Dependencies and project configuration

## 🎯 Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Display all blog posts |
| GET | `/posts/new` | Show create post form |
| POST | `/posts` | Create a new post |
| GET | `/posts/:id` | View single post details |
| GET | `/posts/:id/edit` | Show edit form for post |
| POST | `/posts/:id/edit` | Update existing post |
| POST | `/posts/:id/delete` | Delete a post |

## 💡 Key Highlights

- **RESTful Design**: Follows REST conventions with proper HTTP methods
- **Template Inheritance**: Uses EJS layout pattern for DRY code
- **Form Validation**: Client and server-side input validation
- **Professional Styling**: Modern gradient design with smooth animations
- **Session-Based Storage**: In-memory arrays for quick prototyping (easily upgradable to database)

## 🔮 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and authorization
- [ ] Comments and reactions on posts
- [ ] Rich text editor for post content
- [ ] Search and filter functionality
- [ ] Image upload support
