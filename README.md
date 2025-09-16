# Y7 Local Commenter

<div align="center">

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
![Privacy](https://img.shields.io/badge/privacy-100%25_local-brightgreen.svg?style=flat-square)

**Privacy-First Code Documentation | Local AI-Powered | Zero External Dependencies**

</div>

---

## Overview

Y7 Local Commenter is a VS Code extension that generates intelligent, context-aware code comments using **completely local AI**. No data leaves your machine, no API keys required, no internet connection needed during operation.

Built for developers who value privacy and control over their codebase while still wanting the productivity benefits of AI-assisted documentation.

---

## Motivation

In an era where cloud-based AI tools are everywhere, some projects demand **100% privacy**:

- **Enterprise codebases** with strict security policies
- **Confidential projects** where code cannot leave premises  
- **Privacy-conscious developers** who want control over their data
- **Air-gapped environments** where external APIs aren't accessible
- **Passionate coders** who enjoy writing code themselves and want to maintain that hands-on approach while automating documentation

This extension bridges that gap - giving you AI-powered documentation while keeping everything local.

**Why This Matters:** In sensitive projects where 70% of the code is written by developers themselves (not AI-generated), automated commenting becomes essential for maintaining documentation quality without compromising the human-crafted codebase integrity.

**Personal Context:** This extension was built for my own needs first, but I believe it can be helpful for at least a few other developers out there - whether for privacy reasons, infrastructure challenges, or simply for those who enjoy coding by passion and want to maintain that personal touch in their development process. Being based in Burkina Faso, Africa, I often face power cuts and unreliable internet connectivity - situations where local AI becomes invaluable for maintaining productivity. You can still code and document even when the internet is down.

> **Note:** This is a personal project that doesn't aim to diss anyone or replace existing solutions. If you don't find it useful, feel free to pass and ignore it. However, if you find it worth using, I'd appreciate a star on the repository - it helps me know the tool is serving its purpose for fellow developers.

---

## Features

### Smart Comment Generation
- **Context-aware analysis** - Understands your entire file, not just selected code
- **Multi-language support** - Automatically detects comment syntax for 15+ languages
- **Intelligent insights** - Explains purpose, functionality, and behavior
- **Cursor-based insertion** - Comments appear exactly where you need them

### Language Support
| Language | Comment Style | Status |
|----------|---------------|---------|
| JavaScript/TypeScript | `//` | Supported |
| Python | `#` | Supported |
| Java/C/C++/C# | `//` | Supported |
| HTML/XML | `<!-- -->` | Supported |
| CSS/SCSS | `/* */` | Supported |
| Shell/YAML | `#` | Supported |
| PHP/Ruby | `#` or `//` | Supported |

### Usage
1. **Select** the code block, function, or class you want to comment
2. **Copy** it to clipboard (`Ctrl+C`)
3. **Place cursor** where you want the comment to be inserted
4. **Open Command Palette** (`Ctrl+Shift+P`) and run `Generate Block Comment`
5. **Wait** for processing (may take 45 seconds to 1 minute depending on code complexity)
6. **Review** the generated comment and edit if needed

---

## Prerequisites

### Required Software
- **[Ollama](https://ollama.ai)** - Local AI model runner
- **VS Code** - Version 1.104.0 or higher

### Setup Steps

1. **Install Ollama**
   ```bash
   # Visit https://ollama.ai and download for your OS
   # Or use package managers:
   
   # macOS
   brew install ollama
   
   # Linux (script install)
   curl -fsSL https://ollama.ai/install.sh | sh
   ```

2. **Pull the AI Model**
   ```bash
   ollama pull phi3.5:latest
   ```

3. **Start Ollama Service**
   ```bash
   ollama serve
   # Should run on http://127.0.0.1:11434
   ```

4. **Install Extension**
   - **Method 1:** Download the `.vsix` file from [GitHub Releases](https://github.com/Y4NN777/Y7-local-commenter-ext/releases)
   - **Method 2:** Install via command line: `code --install-extension y7-local-commenter-0.0.1.vsix`
   - **Method 3:** Install via VS Code GUI: Extensions panel → `...` menu → "Install from VSIX" → Select downloaded file

---

## Configuration

Currently, the extension works with these defaults:
- **Ollama Host:** `http://127.0.0.1:11434`
- **Model:** `phi3.5:latest`
- **Comment Style:** Auto-detected from file language

*Future versions will include customizable settings for host, model, and prompting.*

---

## Performance Notes

Comment generation speed depends on both your hardware and the **size/complexity of the selected code block**:

| Hardware | Simple Functions | Complex Classes/Large Blocks |
|----------|------------------|------------------------------|
| Modern CPU (8+ cores) | 15-30 seconds | 45 seconds - 1 minute |
| GPU-accelerated | 10-20 seconds | 30-45 seconds |
| Older hardware | 30-45 seconds | 1-2 minutes |

**Important:** Always review the generated comments for accuracy. The AI analyzes your code block in the context of the entire file, but human oversight ensures quality and relevance.

**Tip:** Ollama supports GPU acceleration for faster inference. Check Ollama docs for CUDA/Metal setup.

---

## Roadmap

### v0.1.0 (Next Release)
- Configurable Ollama host/port
- Multiple AI model support
- Custom comment templates
- Batch comment generation

### v0.2.0 (Future)
- "Comment as you type" mode
- Integration with popular comment standards (JSDoc, etc.)
- Custom prompt engineering interface
- Comment style preferences

### v1.0.0 (Vision)
- Multi-language model support
- Advanced context analysis
- Team sharing capabilities (still local)
- Performance optimizations

---

## Development

Want to contribute or customize? Here's how to get started:

```bash
# Clone the repository
git clone https://github.com/Y4NN777/Y7-local-commenter-ext

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run extension in development mode
F5 # Opens Extension Development Host
```

---

## Contributing

Contributions are welcome! This project is built for the community of privacy-conscious developers.

- **Bug reports** - [Open an issue](https://github.com/Y4NN777/Y7-local-commenter-ext/issues) with details
- **Feature requests** - [Suggest improvements](https://github.com/Y4NN777/Y7-local-commenter-ext/issues/new)
- **Pull requests** - Submit your enhancements
- **Documentation** - Help improve docs

### Development Setup
```bash
# Clone the repository
git clone https://github.com/Y4NN777/Y7-local-commenter-ext

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run extension in development mode
F5 # Opens Extension Development Host
```

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Ollama Team** - For making local AI accessible
- **Microsoft** - For the excellent VS Code extension APIs
- **Privacy-conscious developers** - For inspiring this project

---

## Support

- **Issues:** [GitHub Issues](https://github.com/Y4NN777/Y7-local-commenter-ext/issues)
- **Feature Requests:** [New Issue](https://github.com/Y4NN777/Y7-local-commenter-ext/issues/new)
- **Documentation:** Check this README or code comments

---

<div align="center">

**Built with privacy and care by developers, for developers**

*Keep your code local, keep your privacy intact*

</div>