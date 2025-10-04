# 🤝 Contributing to TaskManager

First off, thank you for considering contributing to TaskManager! It's people like you that make TaskManager such a great tool.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Style Guidelines](#style-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Pledge

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- MongoDB (for backend development)

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/TaskManager.git
   cd TaskManager
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/riteshkumar34/TaskManager.git
   ```

4. **Install dependencies**
   ```bash
   # Frontend
   cd frontend
   npm install
   
   # Backend
   cd ../backend
   npm install
   ```

5. **Set up environment variables**
   ```bash
   # Backend
   cp .env.example .env
   # Edit .env with your configuration
   
   # Frontend
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

## 🤔 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues as you might find that you don't need to create one.

**When creating a bug report, please include:**

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node.js version, etc.)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the concept**
- **Describe the current behavior and explain which behavior you expected**
- **Explain why this enhancement would be useful**

### 🔨 Code Contributions

#### Good First Issues

Look for issues labeled with:
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `bug` - Something isn't working
- `enhancement` - New feature or request

#### Areas for Contribution

- **Frontend Features**: New UI components, improvements to existing features
- **Backend Features**: New API endpoints, database optimizations
- **Documentation**: README improvements, code comments, tutorials
- **Testing**: Unit tests, integration tests, end-to-end tests
- **Performance**: Optimization improvements
- **Accessibility**: Making the app more accessible
- **Mobile**: Responsive design improvements

## 🛠️ Development Process

### Branch Naming Convention

```bash
feature/feature-name        # New features
bugfix/bug-description     # Bug fixes
hotfix/urgent-fix          # Urgent production fixes
docs/documentation-update  # Documentation updates
refactor/code-improvement  # Code refactoring
```

### Development Workflow

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Add comments where necessary
   - Follow the style guidelines

3. **Test your changes**
   ```bash
   # Frontend
   cd frontend
   npm run lint
   npm run build
   
   # Backend
   cd backend
   npm run dev
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**

## 🎨 Style Guidelines

### JavaScript/React Style Guide

- Use **ES6+** features
- Use **functional components** with hooks
- Use **arrow functions** for inline functions
- Use **destructuring** when appropriate
- Use **template literals** for string interpolation

#### Examples

```javascript
// ✅ Good
const MyComponent = ({ title, content }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // ...
  };
  
  return (
    <div className="component-container">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

// ❌ Avoid
function MyComponent(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    // ...
  }
  
  return React.createElement('div', { className: 'component-container' }, ...);
}
```

### CSS/Tailwind Guidelines

- Use **Tailwind utility classes** primarily
- Use **semantic class names** for custom CSS
- Follow **mobile-first** responsive design
- Use **CSS custom properties** for theming

```css
/* ✅ Good */
.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors;
}

/* ❌ Avoid */
.btn-primary {
  background-color: #2563eb;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
}
```

### Backend Style Guide

- Use **async/await** instead of callbacks
- Use **middleware** for common functionality
- Use **proper error handling**
- Use **descriptive variable names**

```javascript
// ✅ Good
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }
    
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ❌ Avoid
const createNote = (req, res) => {
  const t = req.body.title;
  const c = req.body.content;
  
  Note.create({ title: t, content: c }, (err, note) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(note);
    }
  });
};
```

## 📝 Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

### Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Examples
```bash
feat: add note search functionality
fix: resolve note deletion bug
docs: update installation instructions
style: format code with prettier
refactor: simplify note validation logic
perf: optimize database queries
test: add unit tests for note controller
chore: update dependencies
```

## 🔄 Pull Request Process

### Before Submitting

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all tests pass**
4. **Follow the style guidelines**
5. **Update the README** if needed

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] I have tested these changes locally
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Screenshots (if applicable)
Add screenshots to help explain your changes

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
```

### Review Process

1. **Maintainer review** - At least one maintainer will review your PR
2. **CI checks** - All automated checks must pass
3. **Discussion** - Address any feedback or questions
4. **Approval** - Once approved, your PR will be merged

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- GitHub contributors graph

## 📞 Getting Help

If you need help:

1. **Check existing issues** and documentation
2. **Create a new issue** with the `question` label
3. **Join discussions** in existing issues
4. **Contact maintainers** directly if needed

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Node.js Documentation](https://nodejs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Documentation](https://expressjs.com)

---

Thank you for contributing to TaskManager! 🎉
