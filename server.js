import express from "express";
import bodyParser from "body-parser";
import engine from "ejs-mate";

const app = express();
const PORT = 3000; 

// In-memory storage for blog posts 
let blogPosts = []; 
let postIdCounter = 1; 

app.engine('ejs', engine);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 
app.set('view engine', 'ejs'); 
app.set('views', './views');

//HomePage
app.get('/', (req, res) => {
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); 

    res.render('index', { 
        posts: sortedPosts });
}); 

// Show form for creating new post 
app.get('/new', (req, res) => { 
    res.render('new'); 
}); 

// Create new post 
app.post('/new', (req, res) => { 
    const { title, content } = req.body; 
    
    // Validation 
    if (!title || !content) { 
        return res.status(400).render('new', { 
            error: 'Title and content are required!' 
        }); 
    } 
    const newPost = { 
        id: postIdCounter++,
        title: title.trim(), 
        content: content.trim(), 
        createdAt: new Date(), 
        updatedAt: new Date()
    };
    
    blogPosts.push(newPost); 
    res.redirect('/'); 
}); 

// View single post 
app.get('/:id', (req, res) => { 
    const post = blogPosts.find(p => p.id == req.params.id); 
    if (!post) { 
        return res.status(404).render('index', { posts: blogPosts, error: 'Post not found!' });
    } 
    res.render('show', { post });
}); 

// Show form for editing post 
app.get('/:id/edit', (req, res) => { 
    const post = blogPosts.find(p => p.id == req.params.id); 
    if (!post) { 
        return res.redirect('/'); 
    } 
    res.render('edit', { post }); 
}); 

// Update post 
app.post('/:id/edit', (req, res) => { 
    const post = blogPosts.find(p => p.id == req.params.id); 
    const { title, content } = req.body; 

    if (!post) {
        return res.redirect('/'); 
    }
    // Validation 
    if (!title || !content) { 
        return res.status(400).render('edit', { post, error: 'Title and content are required!' });
    }

    post.title = title.trim(); 
    post.content = content.trim(); 
    post.updatedAt = new Date(); 
    res.redirect('/' + post.id); 
}); 

// Delete post 
app.post('/:id/delete', (req, res) => { 
    const index = blogPosts.findIndex(p => p.id == req.params.id); 
    if (index !== -1) { 
        blogPosts.splice(index, 1);
    } 
    res.redirect('/'); 
}); 

app.post("/posts/:id/delete", (req, res) => {

    const index = blogPosts.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        blogPosts.splice(index, 1);
    }
    res.redirect("/");
});
 
app.listen(PORT, () => { 
    console.log(`Blog application running on http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server`); 
});
