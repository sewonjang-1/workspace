# CLAUDE.md - Project Technical Foundation

> 이 파일은 프로젝트의 기술적 기초, 아키텍처, 개발 가이드를 정의합니다.

---

## 🏆 품질 평가 하네스 (Quality Assessment Harness)

프로젝트 품질을 **10개 루브릭 항목**으로 자동 평가합니다 (50점 만점).

```
Quality Assessment Harness
    │
    ├─ Phase 1: 코드 & 문서 검증
    │   └─ 코드 품질, 문서화, 아키텍처 (3항목)
    │
    ├─ Phase 2: 자동화 & 테스트 검증
    │   └─ 자동화, 테스트, 확장성 (3항목)
    │
    ├─ Phase 3: 운영 품질 검증
    │   └─ UX, 보안, 성능, 신뢰성 (4항목)
    │
    └─ Phase 4: 결과 집계 & 리포트
        └─ 최종 점수, 등급, 개선사항 생성
```

### 루브릭 구성 (10개 항목)

| # | 항목 | 만점 | 현재 | 평가 |
|---|------|------|------|------|
| 1️⃣ | 코드 품질 | 5 | 5 | ⭐⭐⭐⭐⭐ |
| 2️⃣ | 자동화 | 5 | 5 | ⭐⭐⭐⭐⭐ |
| 3️⃣ | 테스트 | 5 | 5 | ⭐⭐⭐⭐⭐ |
| 4️⃣ | 문서화 | 5 | 5 | ⭐⭐⭐⭐⭐ |
| 5️⃣ | 확장성 | 5 | 5 | ⭐⭐⭐⭐⭐ |
| 6️⃣ | UX | 5 | 4 | ⭐⭐⭐⭐ |
| 7️⃣ | 보안 | 5 | 4 | ⭐⭐⭐⭐ |
| 8️⃣ | 성능 | 5 | 5 | ⭐⭐⭐⭐⭐ |
| 9️⃣ | 신뢰성 | 5 | 4 | ⭐⭐⭐⭐ |
| 🔟 | 아키텍처 | 5 | 5 | ⭐⭐⭐⭐⭐ |

**총점: 46/50 (92%) - A+ 등급 (탁월함)** 🏆

### 실행 방법

```bash
# 품질 평가 실행
./run-quality-assessment.sh

# 결과 보기
cat quality-reports/quality-$(date '+%Y-%m-%d').json
```

---

## 🤖 Workflow 하네스 아키텍처 (공식문서 기준)

이 프로젝트는 **Workflow 하네스**로 3단계 자동화 파이프라인을 구성합니다 (Claude 공식 패턴).

```
Workflow: daily-ai-briefing-harness
    │
    ├─ Phase 1: 뉴스 수집
    │   └─ Agent: news-collector (WebSearch, WebFetch)
    │         └─ 8개 소스 → TOP 5 뉴스 + 용어 3개
    │
    ├─ Phase 2: 브리핑 생성
    │   └─ Agent: report-writer (Write, Bash)
    │         └─ HTML 생성 (ai-daily-YYYY-MM-DD.html)
    │
    └─ Phase 3: 게시 & 검증
        └─ 최종 검증 (Git 푸시, Issues 댓글, Dashboard 업데이트)
```

### Workflow 구성

| 파일 | 설명 |
|------|------|
| `.claude/workflows/daily-ai-briefing-harness.js` | 메인 오케스트레이터 (export const meta + phase() + agent()) |

### 에이전트 구성

| 파일 | 역할 | 도구 |
|------|------|------|
| `.claude/agents/news-collector.md` | AI 뉴스 8개 소스 수집 | WebSearch, WebFetch |
| `.claude/agents/report-writer.md` | HTML 생성 & GitHub 게시 | Write, Bash, PowerShell |

---

## 🎣 Hook 자동화 시스템 (4개)

Hook은 특정 이벤트 발생 시 자동 실행되는 shell 명령입니다 (Claude Code 내장).

### Hook 구성 (7개)

**기본 Hook (4개)**
| Hook 파일 | 실행 시점 | 역할 |
|----------|---------|------|
| `hooks/pre-git-push` | Git push 전 | 파일명 형식 & 콘텐츠 검증 |
| `hooks/post-file-write` | ai-daily-*.html 생성 후 | 자동 검증 & GitHub Issues #2 댓글 |
| `hooks/pre-workflow` | Workflow 시작 전 | 환경 체크 (git, gh, python 등) |
| `hooks/post-agent` | Agent 실행 후 | 결과 자동 처리 & Issues 관리 |

**테스트 Hook (3개)**
| Hook 파일 | 실행 시점 | 역할 |
|----------|---------|------|
| `hooks/post-agent-test` | Agent 실행 후 | **자동테스트** (HTML 형식, 콘텐츠, Git 상태) |
| `hooks/test-html-validation` | HTML 생성 후 | **상세 검증** (인코딩, CSS, 반응형, 링크, 날짜, 크기) |
| `hooks/test-workflow-validation` | Workflow 후 | **결과 검증** (모든 Phase 완료 확인) |

### Hook의 자동화 & 테스트 효과

**자동화 효과**
| Hook | 내용 |
|------|------|
| **pre-git-push** | ✅ 파일명 오류 방지 (ai-daily-YYYY-MM-DD.html 형식 검증) |
| **post-file-write** | ✅ 생성 즉시 GitHub Issues #2에 댓글 + 파일 정보 기록 |
| **pre-workflow** | ✅ Workflow 시작 전 환경 점검 (git, gh, python 설치 확인) |
| **post-agent** | ✅ Issues #1, #2, #3 자동 업데이트 & 자동 종료 |

**자동테스트 효과**
| Hook | 테스트 항목 |
|------|-----------|
| **post-agent-test** | 🧪 HTML 파일 생성 확인 / 파일명 형식 / 최소 크기(5KB) / DOCTYPE / 뉴스 섹션 / 용어 섹션 / 트렌드 섹션 / 뉴스 개수(최소 3개) / Git 상태 |
| **test-html-validation** | 🔍 UTF-8 인코딩 / CSS 스타일 / 반응형 설계 / 외부 링크 / 날짜 표시 / 한글 콘텐츠 / 파일 크기 최적화 |
| **test-workflow-validation** | 🔬 Phase 1 뉴스 수집 / Phase 2 HTML 생성 / Phase 3 Git 커밋 / GitHub 푸시 / DASHBOARD.md 업데이트 / 환경 상태 |

---

## 📊 통합 작업 흐름 (Workflow + Hooks + 테스트)

```
사용자 요청: "AI 브리핑 만들어줄래?"
        ↓
[Hook: pre-workflow] → 환경 체크 (git, gh, python) ✅
        ↓
[Workflow: daily-ai-briefing-harness 시작]
        ↓
├─ Phase 1: 뉴스 수집
│  └─ agent(news-collector) → 8개 소스에서 TOP 5 + 용어 수집
│         ↓
├─ Phase 2: 브리핑 생성
│  └─ agent(report-writer) → HTML 파일 생성 (ai-daily-YYYY-MM-DD.html)
│  └─ [Hook: post-file-write] → Issues #2 자동 댓글 ✅
│  └─ [Hook: test-html-validation] → 인코딩, CSS, 반응형 검증 🔍
│         ↓
└─ Phase 3: 게시 & 검증
   └─ Git 커밋 & 푸시
   └─ [Hook: pre-git-push] → 파일명 형식 검증 ✅
   └─ [Hook: post-agent] → Issues 최종 처리 ✅
   └─ [Hook: post-agent-test] → HTML 콘텐츠 자동테스트 🧪
   └─ [Hook: test-workflow-validation] → Phase 1/2/3 결과 검증 🔬
        ↓
✅ 모든 테스트 통과 → 최종 보고 (Issue #2 자동 종료)
```

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
| **.claude/workflows/daily-ai-briefing-harness.js** | Workflow 하네스 (메인 오케스트레이터) | 배포 |
| **.claude/agents/news-collector.md** | 뉴스 수집 에이전트 정의 | 배포 |
| **.claude/agents/report-writer.md** | 브리핑 작성 에이전트 정의 | 배포 |
| **.claude/hooks/pre-git-push** | Git 푸시 전 검증 Hook | 자동 실행 |
| **.claude/hooks/post-file-write** | 파일 생성 후 자동 댓글 Hook | 자동 실행 |
| **.claude/hooks/pre-workflow** | Workflow 시작 전 환경 체크 Hook | 자동 실행 |
| **.claude/hooks/post-agent** | Agent 실행 후 Issues 관리 Hook | 자동 실행 |
| **.claude/hooks/post-agent-test** | Agent 후 자동테스트 Hook (HTML 형식, 콘텐츠, Git) | 자동 실행 |
| **.claude/hooks/test-html-validation** | HTML 상세 검증 Hook (인코딩, CSS, 반응형 등) | 자동 실행 |
| **.claude/hooks/test-workflow-validation** | Workflow 결과 검증 Hook (Phase 1/2/3) | 자동 실행 |
| **.claude/skills/ai-trend-collector/** | 뉴스 수집 스킬 (참고용) | 보관 |
| **.claude/skills/daily-ai-reporter-setup/** | 브리핑 게시 스킬 (참고용) | 보관 |
| **ai-daily-YYYY-MM-DD.html** | 일일 AI 브리핑 리포트 | 자동 생성 |

---

## 🔧 기술 스택 (업데이트됨)

| 계층 | 기술 | 세부사항 |
|------|------|--------|
| **오케스트레이션** | Claude Workflow 하네스 | `export const meta + phase() + agent()` |
| **에이전트** | news-collector, report-writer | WebSearch, Write, Bash |
| **자동화** | Hooks (7개) | pre-git-push, post-file-write, pre-workflow, post-agent |
| **자동테스트** | Test Hooks (3개) | post-agent-test, test-html-validation, test-workflow-validation |
| **스케줄** | Windows Scheduled Task | 일일 09:00 AM |
| **인증** | Git Credential Cache | 로컬 캐시 (1시간) |
| **원격** | GitHub (HTTPS) | sewonjang-1/workspace |
| **CLI** | gh, git, PowerShell/Bash | 필수 도구 |
| **리포팅** | HTML5 + CSS3 | 반응형 디자인 |
| **추적** | GitHub Issues + Labels | 자동 댓글 & 종료 |

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
