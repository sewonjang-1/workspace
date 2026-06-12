# CLAUDE.md - Project Technical Foundation

> 이 파일은 프로젝트의 기술적 기초, 아키텍처, 개발 가이드를 정의합니다.

---

## 🤖 에이전트 팀 구성 (Agent Team)

이 프로젝트는 3개 에이전트가 팀으로 작동합니다. 에이전트 정의 파일은 `.claude/agents/` 폴더에 있습니다.

```
briefing-coordinator (총괄 조율자)
        │
        ├──▶ news-collector   (뉴스 수집 담당)
        │         │
        │    8개 소스 검색 → TOP 5 선정
        │
        └──▶ report-writer    (브리핑 작성 & 게시 담당)
                  │
             HTML 생성 → GitHub 푸시
```

| 에이전트 파일 | 역할 | 주요 도구 |
|-------------|------|---------|
| `agents/coordinator.md` | 팀 총괄, 지시, 검토 | Task |
| `agents/news-collector.md` | AI 뉴스 수집 | WebSearch, WebFetch |
| `agents/report-writer.md` | HTML 생성 & GitHub 게시 | Write, Bash |

**팀 작동 방식**: `briefing-coordinator`가 두 에이전트에게 순서대로 작업을 지시하고, 결과를 검토한 뒤 사용자에게 최종 보고합니다.

---

## 프로젝트 개요

**이름:** Daily AI Reporter Automation  
**저장소:** https://github.com/sewonjang-1/workspace  
**기술:** GitHub + Git + Scheduled Tasks + PowerShell/Bash  
**목표:** AI 동향 리포트 자동화 + GitHub Issue 관리

---

## 🏗️ 시스템 아키텍처

```
┌─────────────────────────────────────────────┐
│     Daily Scheduled Task (9 AM)             │
├─────────────────────────────────────────────┤
│  1. Collect AI News & Trends (수동/자동)     │
│  2. Generate HTML Report                    │
│  3. Git Commit & Push                       │
│  4. Update GitHub Issues                    │
│  5. Update DASHBOARD.md                     │
└─────────────────────────────────────────────┘
         │
         ├─► GitHub Repository
         ├─► GitHub Issues
         └─► Git History
```

---

## 📁 파일 구조

| 파일 | 역할 | 소유자 |
|------|------|--------|
| **CLAUDE.md** | 기술 가이드 | 개발자 |
| **soul.md** | 프로젝트 가치 | 팀 |
| **DASHBOARD.md** | 실시간 진행상황 | 자동 생성 |
| **PROJECT_STATUS.md** | 상태 보고서 | 주간 업데이트 |
| **.claude/skills/daily-ai-reporter-setup/** | 재사용 스킬 | 배포 |
| **ai-daily-YYYY-MM-DD.html** | 일일 리포트 | 자동 생성 |

---

## 🔧 기술 스택

| 계층 | 기술 |
|------|------|
| **스케줄** | Windows Scheduled Task |
| **인증** | Git Credential Cache |
| **원격** | GitHub (HTTPS) |
| **CLI** | gh, git, PowerShell/Bash |
| **리포팅** | HTML5 + CSS3 |
| **추적** | GitHub Issues + Labels |

---

## 🎯 개발 워크플로우

### 1. 로컬 작업
```bash
cd C:\Users\Admin\Desktop\workspace\ai-reports
git status
git pull origin main  # 최신 상태 확인
```

### 2. 변경 작업
```bash
# 파일 수정
git add <files>
git commit -m "설명"
```

### 3. 푸시
```bash
git push origin main
# Credential Cache가 자동으로 인증 처리
```

### 4. 검증
```bash
# GitHub Issues 확인
# DASHBOARD.md 자동 업데이트 확인
```

---

## 📊 GitHub Issues 관리

| Issue | 상태 | 목적 | 자동 댓글 |
|-------|------|------|----------|
| #1 | ✅ CLOSED | Git 인증 검증 | ✅ |
| #2 | ✅ CLOSED | 파일명 형식 검증 | ✅ |
| #3 | 🟡 OPEN | 에러 처리 (향후) | ❌ |

**Labels:**
- 🟢 ✅ Resolved (초록) — 완료
- 🔴 🔴 Open (빨강) — 진행
- 🟡 🟡 Pending (노랑) — 예정
- 🔵 🔵 Enhancement (파랑) — 개선

---

## 🚀 스킬: daily-ai-reporter-setup

**위치:** `.claude/skills/daily-ai-reporter-setup/SKILL.md`

### 스킬이 하는 일
- GitHub 저장소 자동 설정
- 스케줄 작업 자동 생성
- Git 인증 자동 구성
- Issues 자동 생성 & 관리
- Dashboard 자동 업데이트

### Trigger 조건
사용자가 다음과 같이 말하면 스킬이 실행됨:
```
"AI 동향 리포트를 GitHub에 자동으로 생성해줄래?"
"GitHub 자동화 시스템 만들어줘"
"스케줄된 리포트 시스템 구축해줄래?"
```

---

## ✅ 설정 체크리스트

### 초기 설정 (완료)
- [x] GitHub 저장소 생성
- [x] 로컬 클론
- [x] Git 초기화
- [x] Credential Cache 설정
- [x] Scheduled Task 생성
- [x] Issues 생성

### 검증 (완료)
- [x] 파일명 형식 검증
- [x] Git 푸시 검증
- [x] Issue 댓글 검증
- [x] Dashboard 자동 생성

### 배포 (완료)
- [x] 스킬 개발
- [x] SKILL.md 작성
- [x] GitHub에 저장

---

## 🔐 보안 사항

1. **PAT (Personal Access Token)**
   - 저장 위치: Git Credential Cache (로컬)
   - 스코프: `repo`, `workflow`
   - 유효기간: 1시간 (Credential Cache)

2. **파일 권한**
   ```bash
   # .claude/skills 폴더는 공개 저장소
   # 민감 정보 저장 금지
   ```

3. **커밋 컨벤션**
   ```
   feat: 새 기능
   fix: 버그 수정
   docs: 문서 수정
   test: 테스트 추가
   chore: 환경 설정
   ```

---

## 📈 모니터링

### 자동 모니터링
- ✅ DASHBOARD.md (실시간 업데이트)
- ✅ GitHub Issues (자동 댓글)
- ✅ Git 커밋 히스토리

### 수동 모니터링
- 📊 PROJECT_STATUS.md (주간 업데이트)
- 🐛 GitHub Issues 상태 확인

---

## 🛠️ 트러블슈팅

| 문제 | 원인 | 해결책 |
|------|------|--------|
| Git push 실패 | Credential Cache 만료 | 재인증 (1회만) |
| 스케줄 미실행 | Task 비활성화 | Task Scheduler에서 확인 |
| 파일명 오류 | 날짜 형식 오류 | 정규식 검증 필요 |
| Issue 댓글 안 됨 | gh CLI 인증 오류 | `gh auth login` 다시 실행 |

---

## 📚 참고 링크

- **저장소:** https://github.com/sewonjang-1/workspace
- **Issues:** https://github.com/sewonjang-1/workspace/issues
- **실행 대시보드:** DASHBOARD.md
- **상태 보고서:** PROJECT_STATUS.md
- **팀 정보:** soul.md

---

**작성:** 2026-06-11 | **버전:** 2.0 | **상태:** 운영 중
