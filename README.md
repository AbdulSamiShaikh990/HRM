# HRM Enterprise System

A comprehensive Human Resource Management system built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Dashboard**: Comprehensive overview with analytics and key metrics
- **Employee Management**: Complete employee lifecycle management
- **Attendance Tracking**: Real-time attendance monitoring
- **Leave Management**: Automated leave request and approval system
- **Payroll**: Integrated payroll processing
- **Performance Management**: Employee performance evaluation tools
- **Recruitment**: End-to-end recruitment workflow
- **AI Optimization**: AI-powered insights and recommendations
- **Sentiment Analysis**: Employee satisfaction monitoring
- **Settings**: Comprehensive system configuration

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **State Management**: React Hooks
- **Package Manager**: npm/pnpm

## 📁 Project Structure

```
HRM/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard pages
│   ├── user/             # User-specific pages
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── ui/              # UI components
│   └── ...              # Custom components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbdulSamiShaikh990/HRM.git
   cd HRM
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

## 📝 Git Safety Guidelines

### ⚠️ IMPORTANT: Preventing Desktop Uploads

To prevent accidentally uploading your entire desktop, follow these guidelines:

#### 1. **Always Initialize Git Inside Project Folder**
```bash
# ✅ CORRECT - Inside project folder
cd C:\Users\hp\Desktop\MyProject
git init

# ❌ WRONG - Never do this from Desktop root
cd C:\Users\hp\Desktop
git init
```

#### 2. **Use the Safety Script**
We've provided a PowerShell script to safely set up repositories:
```powershell
# Run this script from INSIDE your project folder
.\setup-git-repo.ps1 -ProjectName "MyProject" -GitHubRepoUrl "https://github.com/username/repo.git"
```

#### 3. **Check Before Committing**
Always review what files are staged:
```bash
git status
git diff --cached
```

#### 4. **Use Specific File Addition**
Instead of `git add .`, add specific files:
```bash
# ✅ Better - Add specific files
git add src/ components/ package.json

# ⚠️ Risky - Adds everything in current directory
git add .
```

#### 5. **Comprehensive .gitignore**
Our `.gitignore` file prevents common desktop files:
- `*.lnk` - Windows shortcuts
- `*.url` - Internet shortcuts  
- `Desktop.ini` - Desktop configuration
- `Desktop/` - Desktop folder
- Various temporary and system files

### 🔍 Repository Safety Checklist

Before pushing to GitHub, verify:

- [ ] You're in the correct project directory
- [ ] No desktop shortcuts (`.lnk`, `.url`) are staged
- [ ] No system files (`Desktop.ini`, `Thumbs.db`) are staged
- [ ] Only project-related files are included
- [ ] `.gitignore` is properly configured

### 🚨 Emergency Recovery

If you accidentally commit desktop files:

1. **Don't panic** - Git history can be fixed
2. **Create a new branch** with clean files
3. **Force push** the clean branch
4. **Delete the old branch** with desktop files

```bash
# Create clean branch
git checkout --orphan clean-branch
git add .
git commit -m "Clean repository"
git push origin clean-branch

# Set as main branch on GitHub
# Then delete the old branch
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abdul Sami Shaikh**
- GitHub: [@AbdulSamiShaikh990](https://github.com/AbdulSamiShaikh990)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Shadcn/ui for the beautiful component library
- All contributors and supporters

---

**⚠️ Remember**: Always double-check what you're committing to avoid uploading personal files or desktop shortcuts! 