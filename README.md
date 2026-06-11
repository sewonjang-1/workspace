# Daily AI Reporter Automation

**자동으로 AI 동향을 수집하고, GitHub에 매일 저장하는 완전 자동화 시스템**

---

## 📚 프로젝트 문서

### 🎯 **처음 읽기**
- **[soul.md](soul.md)** — 프로젝트의 핵심 가치 & 비전
- **[CLAUDE.md](CLAUDE.md)** — 기술 가이드 & 개발 워크플로우

### 📊 **진행상황 추적**
- **[DASHBOARD.md](DASHBOARD.md)** — 실시간 진행 상황 (자동 업데이트)
- **[PROJECT_STATUS.md](PROJECT_STATUS.md)** — 상세 상태 보고서 (주간 업데이트)

### 🛠️ **기술 문서**
- **[.claude/skills/daily-ai-reporter-setup/SKILL.md](.claude/skills/daily-ai-reporter-setup/SKILL.md)** — 재사용 가능한 스킬

### 🐛 **이슈 추적**
- **[GitHub Issues](https://github.com/sewonjang-1/workspace/issues)** — 실시간 문제 추적

---

## ⚡ 빠른 시작

### 이미 설정되어 있습니다
✅ GitHub 저장소 연결  
✅ 매일 오전 9시 자동 실행  
✅ Git 인증 자동 구성  
✅ Issues 자동 관리

### 특할 일은 없습니다!
시스템이 모든 것을 자동으로 처리합니다.

---

## 📁 저장소 구조

```
ai-reports/
├── 📄 README.md                (이 파일)
├── 💡 soul.md                  (프로젝트 철학)
├── 🔧 CLAUDE.md                (기술 가이드)
├── 📊 DASHBOARD.md             (진행상황 - 자동)
├── 📈 PROJECT_STATUS.md        (상태 보고서)
├── 📄 ai-daily-*.html          (일일 리포트 - 자동 생성)
│
└── .claude/skills/
    └── daily-ai-reporter-setup/
        ├── SKILL.md            (스킬 정의)
        └── README.md           (스킬 사용 가이드)
```

---

## 🎯 시스템 흐름

```
매일 09:00 AM
     ↓
[Scheduled Task 실행]
     ↓
1. AI 뉴스 수집
2. HTML 리포트 생성
3. Git 커밋 & 푸시
4. Issues 자동 업데이트
5. DASHBOARD.md 자동 갱신
     ↓
[완료]
```

---

## 📊 현재 상태

| 항목 | 상태 | 진행도 |
|------|------|--------|
| **기본 자동화** | ✅ 완료 | 100% |
| **Issue 관리** | ✅ 완료 | 100% |
| **에러 처리** | 🟡 진행 중 | 0% |
| **전체** | 🟢 운영 중 | 66.7% |

상세 내용은 [DASHBOARD.md](DASHBOARD.md)를 참고하세요.

---

## 🚀 사용 방법

### Claude에게 명령하기
```
"AI 동향 리포트를 GitHub에 자동으로 생성해줄래?"
"GitHub Issues로 추적하면서 자동화해줄래?"
```

스킬이 자동으로 설정을 완료합니다.

### 진행상황 확인
```
DASHBOARD.md를 열어보세요
→ 모든 진행상황이 실시간으로 업데이트됩니다
```

### Issues 확인
```
https://github.com/sewonjang-1/workspace/issues
→ 자동 댓글과 상태 업데이트가 기록됩니다
```

---

## 💡 핵심 기능

✅ **자동화**
- 매일 자동 실행
- 자동 커밋 & 푸시
- 자동 Issue 관리

✅ **투명성**
- 실시간 Dashboard
- GitHub Issues로 추적
- 모든 변경 기록

✅ **안정성**
- 자동 검증
- 에러 처리 (진행 중)
- 실패 시 Issue 생성

✅ **확장성**
- 재사용 가능한 Skill
- 모듈화 구조
- 쉬운 커스터마이징

---

## 📖 문서 가이드

### soul.md를 읽어야 할 때
- 프로젝트의 목표를 알고 싶을 때
- 팀의 가치를 이해하고 싶을 때
- 장기 비전을 확인하고 싶을 때

### CLAUDE.md를 읽어야 할 때
- 기술적 상세를 알고 싶을 때
- 개발하려고 할 때
- 문제를 해결하고 싶을 때

### DASHBOARD.md를 볼 때
- 오늘의 진행상황을 확인하고 싶을 때
- 완료율을 확인하고 싶을 때
- 실시간 상태를 보고 싶을 때

### PROJECT_STATUS.md를 볼 때
- 상세한 주간 보고서가 필요할 때
- 통계 정보가 필요할 때
- 과거 진행상황을 확인할 때

---

## 🔗 주요 링크

| 리소스 | 링크 |
|--------|------|
| **GitHub 저장소** | https://github.com/sewonjang-1/workspace |
| **GitHub Issues** | https://github.com/sewonjang-1/workspace/issues |
| **스킬 코드** | https://github.com/sewonjang-1/workspace/tree/main/.claude/skills/daily-ai-reporter-setup |

---

## ❓ FAQ

**Q: 하루에 한 번만 실행되나요?**  
A: 네, 매일 오전 9시에 정확히 한 번 실행됩니다.

**Q: 수동으로 실행할 수 있나요?**  
A: 네, Windows Task Scheduler에서 "지금 실행"을 클릭하면 언제든 실행됩니다.

**Q: 리포트 내용을 수정할 수 있나요?**  
A: 네, CLAUDE.md의 "스킬 커스터마이징" 섹션을 참고하세요.

**Q: 문제가 생기면?**  
A: GitHub Issues에서 자동 댓글을 확인하세요. 시스템이 자동으로 기록합니다.

---

## 🎓 학습

이 프로젝트는 다음을 배울 수 있는 교육 자료입니다:
- GitHub 자동화
- 스케줄 작업
- Git 보안
- 문서화 베스트 프랙티스

상세 내용은 CLAUDE.md를 참고하세요.

---

**상태:** 🟢 운영 중 | **완료도:** 66.7% | **마지막 업데이트:** 2026-06-11
