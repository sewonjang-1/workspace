---
name: daily-ai-reporter-setup
description: Set up a fully automated daily AI trend report that generates, commits, and pushes to GitHub while automatically managing GitHub Issues. Use this whenever the user wants to create a scheduled system that automatically collects AI news, generates HTML reports, pushes to GitHub, AND tracks issues with automatic comments and status updates—whether they mention "daily report," "GitHub automation," "scheduled tasks," "AI news," or want to automate any kind of content generation workflow to GitHub.
compatibility: Requires GitHub account, git CLI, PowerShell/Bash, gh CLI, and scheduled-tasks
---

# Daily AI Reporter Setup (v2.0)

Automate the creation of daily AI trend reports with complete GitHub issue tracking and management.

## What This Skill Does

**Complete automation system:**

1. **Generates AI Trend Reports** — Collects today's AI news, creates professional HTML reports
2. **Schedules Automated Runs** — Executes daily at your chosen time (default: 9 AM)
3. **Handles Git Authentication** — Sets up secure credential caching
4. **Creates & Manages Issues** — Auto-generates issues, monitors progress, posts updates
5. **Auto-Comments & Resolves** — Posts validation results, closes completed issues
6. **Updates Dashboard** — Maintains a live progress dashboard in DASHBOARD.md

Perfect for teams who want full visibility and automation.

## Prerequisites

- GitHub account with a repository (new or existing)
- Git installed on your machine
- GitHub CLI (`gh`) installed and authenticated
- PowerShell or Bash available
- Personal Access Token (PAT) with `repo` and `workflow` scopes

## Setup Process

### Step 1: Gather Information

Ask the user for:
- **GitHub Repository URL** — Full URL (e.g., `https://github.com/username/workspace`)
- **Local Save Location** — Where to clone/store files
- **Scheduled Time** — When to run daily (default: 9 AM)
- **GitHub Personal Access Token** — For authentication

### Step 2: Prepare Repository

1. Clone or create the repository locally
2. Initialize git configuration
3. Set up credential caching: `git config --global credential.helper cache`

### Step 3: Generate HTML Report Sample

Create `ai-daily-YYYY-MM-DD.html` with:
- Header with date, gradient styling
- 5 AI news headlines with descriptions
- 3 common AI terms explained simply
- Global trend summary (domestic vs. international)
- Professional, responsive design

### Step 4: Set Up Scheduled Task

Create recurring task that:
1. Generates daily HTML report
2. Commits and pushes to GitHub
3. Automatically checks and updates Issues (see Step 6)

### Step 5: Configure Git Authentication

Run:
```bash
git config --global credential.helper cache
git config --global credential.helper cache --timeout=3600
```

On first push, enter PAT once → cached for 1 hour.

### Step 6: Automated Issue Management

The system automatically:

**6a. Creates 3 tracking issues:**
- Issue #1: "Git 인증 설정 필요" (Problem tracking)
- Issue #2: "파일명 동적 생성 검증" (Validation)
- Issue #3: "에러 처리 추가" (Enhancement)

**6b. After each scheduled run:**
- Monitors Issue #1: Posts "✅ RESOLVED" comment when auth works
- Monitors Issue #2: Validates filename format, posts results
- Auto-closes Issue when validation passes
- Posts timestamps and validation evidence

**6c. Updates DASHBOARD.md:**
- Updates completion percentage
- Adds timestamps to dashboard
- Reflects current issue statuses

### Step 7: Create Labels for Issue Tracking

Automatically creates color-coded labels:
- 🟢 **✅ Resolved** (green) — Completed issues
- 🔴 **🔴 Open** (red) — Active issues
- 🟡 **🟡 Pending** (yellow) — Planned work
- 🔵 **🔵 Enhancement** (blue) — Future improvements

Applies labels to issues automatically as status changes.

### Step 8: Test & Verify

1. **Test Report Generation** — Create sample HTML, validate format
2. **Test Git Push** — Confirm credential caching works
3. **Test Issue Creation** — Verify 3 issues created with labels
4. **Test Auto-Comments** — Run validation, check Issue comments
5. **Test Dashboard** — Confirm DASHBOARD.md updates automatically

## Expected Output

After setup:

```
✅ Repository Connected
   Location: [user's path]

✅ Daily Schedule Active  
   Time: [user's time]
   Next run: [timestamp]

✅ Git Authentication
   Method: Credential Cache
   Status: Verified

✅ 3 Issues Created & Labeled
   #1: Git Authentication (✅ Resolved)
   #2: Filename Validation (✅ Resolved)
   #3: Error Handling (🟡 Pending)

✅ Dashboard Created
   File: DASHBOARD.md
   Status: Auto-updating

🚀 System Ready
   Reports generate daily
   Issues auto-update
   Comments posted automatically
```

## Automation Features

### Automatic Issue Comments

System posts validation results to issues:

```
## ✅ Issue Validation Complete

**Date**: 2026-06-11
**Status**: PASSED

Validation Details:
- Filename format: ai-daily-YYYY-MM-DD.html ✅
- Git push: Success ✅
- Report content: Valid ✅

**Next run**: Tomorrow 9:00 AM
```

### Auto-Close Logic

Issues automatically close when:
- ✅ Git authentication validated
- ✅ Filename format confirmed
- ✅ Push successful

### Dashboard Auto-Updates

DASHBOARD.md automatically updates with:
- Current completion percentage
- Latest validation timestamps
- Issue status changes
- System health indicators

## Example Usage

**User Input:**
```
Set up complete AI reporter with issue tracking.
Repo: https://github.com/myuser/workspace
Time: 9 AM daily
Auto-validate everything and update issues
```

**Skill Executes:**
1. ✅ Clones repo + sets up git
2. ✅ Creates scheduled task
3. ✅ Generates sample report
4. ✅ Creates 3 issues with labels
5. ✅ Tests everything automatically
6. ✅ Posts validation comments
7. ✅ Creates DASHBOARD.md
8. ✅ System ready for daily automation

**Next 24 hours:**
- Tomorrow 9 AM: Report generates automatically
- Comments post automatically
- Dashboard updates automatically
- No manual intervention needed

## Troubleshooting

**If scheduled task fails:**
- Check git credential cache is configured
- Verify PAT hasn't expired
- Check local directory permissions

**If Issue comments don't post:**
- Verify gh CLI is authenticated
- Check PAT has `repo` scope
- Review issue numbers in configuration

**If Dashboard doesn't update:**
- Verify write permissions to repository
- Check DASHBOARD.md wasn't deleted
- Ensure git push succeeds

## Customization Options

After setup, customize:
- **Report time**: Change scheduled task frequency
- **Report content**: Modify news sources/categories
- **Report styling**: Update HTML template
- **Issue labels**: Add or modify label colors
- **Dashboard layout**: Customize dashboard format

## v2.0 Features vs v1.0

| Feature | v1.0 | v2.0 |
|---------|------|------|
| Report Generation | ✅ | ✅ |
| Scheduled Runs | ✅ | ✅ |
| Git Authentication | ✅ | ✅ |
| Issue Creation | ✅ | ✅ |
| Auto-Comments | ❌ | ✅ NEW |
| Auto-Close Issues | ❌ | ✅ NEW |
| Dashboard | Manual | ✅ Auto-Update |
| Issue Labels | Manual | ✅ Auto-Apply |
| Validation Tracking | Manual | ✅ Automatic |
