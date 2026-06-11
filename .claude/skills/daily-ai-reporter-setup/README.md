# Daily AI Reporter Setup Skill

**The complete, automated AI trend reporting system for GitHub.**

## Quick Start

```
"AI 동향 리포트를 GitHub에 자동으로 매일 생성해줘"
```

## What It Does

✅ Generates daily AI trend reports (HTML)  
✅ Schedules automatic daily runs  
✅ Configures secure git authentication  
✅ Creates & manages GitHub issues automatically  
✅ Posts validation comments to issues  
✅ Auto-closes completed issues  
✅ Maintains live progress dashboard  

## Features

| Feature | Status |
|---------|--------|
| Daily Report Generation | ✅ Automated |
| Git Authentication | ✅ Secure Caching |
| GitHub Issue Creation | ✅ 3 Issues Auto-Created |
| Auto-Comments | ✅ Validation Results Posted |
| Auto-Close Issues | ✅ When Resolved |
| Dashboard Updates | ✅ Real-time |
| Labels & Organization | ✅ Color-Coded |

## Installation

This skill is ready to use in Claude Code.

## Usage Examples

### Basic Setup
```
Set up daily AI reporter for my workspace
Repository: https://github.com/username/workspace  
Time: 9 AM
```

### With Custom Settings
```
Create automated AI news report:
- Run at 8 AM daily
- Focus on Korean AI news
- Include links to sources
- Auto-track with GitHub issues
```

### Monitoring
```
I want to see the progress of my AI reporter.
Show me the dashboard and issue status.
```

## How It Works

1. **Setup Phase** (One-time, ~5 minutes)
   - Clone repository
   - Configure git
   - Create scheduled task
   - Generate issues

2. **Daily Phase** (Automatic, daily at chosen time)
   - Generate HTML report
   - Commit & push to GitHub
   - Validate everything
   - Post comments to issues
   - Update dashboard

3. **Monitoring Phase** (Always available)
   - View DASHBOARD.md for progress
   - Check GitHub Issues for validation results
   - Review auto-posted comments

## Output Files

- `ai-daily-YYYY-MM-DD.html` — Daily report
- `DASHBOARD.md` — Progress dashboard
- GitHub Issues (#1, #2, #3) — Tracking
- Auto-comments on issues — Validation results

## Requirements

- GitHub account with repository
- Git CLI installed
- GitHub CLI (`gh`) installed & authenticated
- PowerShell or Bash
- Personal Access Token (repo + workflow scopes)

## Support

If issues arise, the system creates GitHub Issues documenting:
- What went wrong
- How to fix it
- Status of resolution

## Version

**v2.0** — With automatic issue management and dashboard updates

## Author

Created as a comprehensive automation skill for Claude Code users.
