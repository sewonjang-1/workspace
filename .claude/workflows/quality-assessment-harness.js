/**
 * Quality Assessment Harness
 *
 * 루브릭 기반 프로젝트 품질 자동 검증
 * 10개 항목 × 5단계 평가 = 50점 만점
 *
 * 공식문서 패턴:
 * Phase 1-5: 검증 실행
 * Phase 6: 결과 집계 및 리포트 생성
 */

export const meta = {
  name: 'quality-assessment-harness',
  description: '프로젝트 품질을 루브릭 기준으로 자동 검증. 10개 항목 평가 (코드, 자동화, 테스트, 문서, 확장성, UX, 보안, 성능, 신뢰성, 아키텍처)',
  phases: [
    {
      title: '코드 & 문서 검증',
      detail: '코드 품질, 문서화, 아키텍처 검증'
    },
    {
      title: '자동화 & 테스트 검증',
      detail: '자동화 수준, 테스트 커버리지, 확장성 검증'
    },
    {
      title: '운영 품질 검증',
      detail: '사용자 경험, 보안, 성능, 신뢰성 검증'
    },
    {
      title: '결과 집계 & 리포트',
      detail: '모든 항목 평가 점수 계산 및 리포트 생성'
    }
  ]
}

// ============================================
// Phase 1: 코드 & 문서 검증
// ============================================

phase('코드 & 문서 검증')
log('📊 루브릭 검증 시작 - Phase 1: 코드 품질, 문서화, 아키텍처')

const codeQualityResults = await agent(
  `프로젝트의 코드 품질을 루브릭 기준으로 평가해줄래?

평가 항목:

## 1️⃣ 코드 품질 (Code Quality)
확인 사항:
- 함수 크기 (평균적절한가? 너무 크지 않은가?)
- 변수명 명확성 (스네이크케이스, 의미 있는 이름?)
- 네이밍 컨벤션 일관성 (Python, JavaScript 컨벤션 준수?)
- 에러 처리 (try-except, try-catch 있는가?)
- 주석 필요성 (WHY 주석은 있는가?)

점수 매기기:
- 5점 (Excellent): 매우 깔끔, 모든 기준 충족
- 4점 (Good): 대부분 좋음, 1-2가지 개선점
- 3점 (Satisfactory): 기본 수준
- 2점 (Fair): 여러 개선점 필요
- 1점 (Needs Improvement): 전반적 개선 필요

## 2️⃣ 문서화 (Documentation)
확인 사항:
- README.md 존재 및 완성도
- CLAUDE.md 기술 문서 완성도
- 코드 주석 충분성
- 설정 방법 설명
- 예제 포함 여부

## 3️⃣ 아키텍처 (Architecture)
확인 사항:
- 컴포넌트 분리도 (에이전트, Hooks, Workflows 분리?)
- 의존성 관리 (순환 의존성 없는가?)
- 계층화 구조 (명확한 레이어?)
- 모듈화 정도

JSON 응답 포맷:
\`\`\`json
{
  "code_quality": {
    "score": 5,
    "details": "이유",
    "strengths": ["강점1", "강점2"],
    "improvements": ["개선점"]
  },
  "documentation": {
    "score": 5,
    "details": "이유",
    "files_checked": ["README.md", "CLAUDE.md"],
    "missing": []
  },
  "architecture": {
    "score": 5,
    "details": "이유",
    "components": ["agents", "hooks", "workflows"],
    "separation": "명확함"
  }
}
\`\`\``,
  {
    label: 'code-quality-check',
    phase: '코드 & 문서 검증'
  }
)

if (!codeQualityResults) {
  log('❌ Phase 1 실패')
  throw new Error('코드 품질 검증 실패')
}

log(`✅ Phase 1 완료: 코드 품질(${codeQualityResults.code_quality.score}/5), 문서(${codeQualityResults.documentation.score}/5), 아키텍처(${codeQualityResults.architecture.score}/5)`)

// ============================================
// Phase 2: 자동화 & 테스트 검증
// ============================================

phase('자동화 & 테스트 검증')
log('📊 Phase 2: 자동화, 테스트, 확장성 검증')

const automationResults = await agent(
  `프로젝트의 자동화, 테스트, 확장성을 루브릭 기준으로 평가해줄래?

평가 항목:

## 1️⃣ 자동화 수준 (Automation)
확인 사항:
- Hook 개수 (몇 개 구현?)
- Hook 작동 확인 (실제로 작동하는가?)
- Workflow 구현 (단계별 자동화?)
- 스케줄링 (자동 실행 가능한가?)
- 수동 개입 필요성 (얼마나 자동인가?)

## 2️⃣ 테스트 커버리지 (Testing)
확인 사항:
- 자동테스트 개수
- 테스트 유형 (단위, 통합, E2E?)
- 테스트 통과율
- 주요 경로 검증 여부
- 엣지 케이스 테스트

## 3️⃣ 확장성 (Scalability)
확인 사항:
- 새 소스 추가 용이성 (8개 → 10개 추가 가능?)
- 새 Hook 추가 용이성 (코드 수정 최소?)
- 설정 변경 용이성 (하드코딩 없는가?)
- 모듈화 정도 (재사용 가능한가?)

JSON 응답:
\`\`\`json
{
  "automation": {
    "score": 5,
    "total_hooks": 7,
    "hooks_working": 7,
    "workflow_phases": 3,
    "manual_steps": 0,
    "details": "완전 자동화"
  },
  "testing": {
    "score": 5,
    "total_tests": 18,
    "pass_rate": 100,
    "coverage": ["html_validation", "workflow_validation", "code_quality"],
    "missing": []
  },
  "scalability": {
    "score": 5,
    "new_source_difficulty": "매우 쉬움",
    "new_hook_difficulty": "쉬움",
    "hardcoded_values": 0,
    "reusable_modules": ["agents", "hooks", "workflows"]
  }
}
\`\`\``,
  {
    label: 'automation-testing-check',
    phase: '자동화 & 테스트 검증'
  }
)

if (!automationResults) {
  log('❌ Phase 2 실패')
  throw new Error('자동화/테스트 검증 실패')
}

log(`✅ Phase 2 완료: 자동화(${automationResults.automation.score}/5), 테스트(${automationResults.testing.score}/5), 확장성(${automationResults.scalability.score}/5)`)

// ============================================
// Phase 3: 운영 품질 검증
// ============================================

phase('운영 품질 검증')
log('📊 Phase 3: UX, 보안, 성능, 신뢰성 검증')

const operationalResults = await agent(
  `프로젝트의 운영 품질을 루브릭 기준으로 평가해줄래?

평가 항목:

## 1️⃣ 사용자 경험 (User Experience)
확인 사항:
- CLI 출력 명확성 (진행 상황 보여주는가?)
- 에러 메시지 (명확하고 도움이 되는가?)
- 사용 난이도 (쉽게 실행 가능?)
- 피드백 (성공/실패 명확?)

## 2️⃣ 보안 (Security)
확인 사항:
- 민감 정보 관리 (API 키, PAT 노출?)
- 인증 구현 (Git 인증 캐시?)
- 권한 관리 (파일 권한 체크?)
- 환경 변수 (비밀은 .env?)
- 로깅 (중요 작업 기록?)

## 3️⃣ 성능 (Performance)
확인 사항:
- 실행 시간 (5초 이내?)
- 리소스 사용 (메모리/CPU?)
- 최적화 (불필요한 작업 없는가?)
- 병렬화 (가능한 부분 병렬?)

## 4️⃣ 신뢰성 (Reliability)
확인 사항:
- 성공률 (몇 %?)
- 자동 복구 (재시도 로직?)
- 에러 핸들링 (모든 케이스?)
- 모니터링 (진행 상황 추적?)
- 로깅 (문제 추적 가능?)

JSON 응답:
\`\`\`json
{
  "user_experience": {
    "score": 4,
    "clarity": "매우 명확",
    "error_messages": "도움이 됨",
    "difficulty": "쉬움",
    "improvements": ["웹 UI 대시보드 추가"]
  },
  "security": {
    "score": 4,
    "sensitive_data": "안전 (Credential Cache)",
    "authentication": "Git 인증 설정됨",
    "secrets_management": ".env 권장",
    "issues": []
  },
  "performance": {
    "score": 5,
    "execution_time": "5초",
    "resource_usage": "낮음",
    "bottlenecks": []
  },
  "reliability": {
    "score": 4,
    "success_rate": 95,
    "retry_logic": "구현됨",
    "error_handling": "대부분 구현",
    "monitoring": "로그 있음"
  }
}
\`\`\``,
  {
    label: 'operational-quality-check',
    phase: '운영 품질 검증'
  }
)

if (!operationalResults) {
  log('❌ Phase 3 실패')
  throw new Error('운영 품질 검증 실패')
}

log(`✅ Phase 3 완료: UX(${operationalResults.user_experience.score}/5), 보안(${operationalResults.security.score}/5), 성능(${operationalResults.performance.score}/5), 신뢰성(${operationalResults.reliability.score}/5)`)

// ============================================
// Phase 4: 결과 집계 & 리포트 생성
// ============================================

phase('결과 집계 & 리포트')
log('📊 Phase 4: 모든 점수 집계 및 최종 리포트 생성')

const finalReport = await agent(
  `다음 검증 결과를 바탕으로 최종 품질 평가 리포트를 작성해줄래?

검증 결과:
${JSON.stringify({
  phase1: codeQualityResults,
  phase2: automationResults,
  phase3: operationalResults
}, null, 2)}

작업:
1. 10개 항목 점수 정리
2. 총합 점수 계산 (만점 50점)
3. 등급 판정 (A+, A, B+, B, C)
4. 강점 3가지 요약
5. 개선사항 3가지 요약
6. 개선 우선순위 제시

마크다운 형식으로 리포트 생성:

\`\`\`markdown
# 품질 평가 리포트 - 2026-06-12

## 📊 최종 점수

| 항목 | 점수 | 등급 |
|------|------|------|
| 코드 품질 | 5/5 | ⭐⭐⭐⭐⭐ |
| 문서화 | 5/5 | ⭐⭐⭐⭐⭐ |
...

**총점: 46/50 (92%)**
**등급: A+ (탁월함)**

## 💪 강점

1. ...
2. ...
3. ...

## 🎯 개선사항

| 우선순위 | 항목 | 난이도 | 예상 효과 |
|---------|------|--------|---------|
| 1 | ... | 중간 | 높음 |
| 2 | ... | 낮음 | 중간 |
| 3 | ... | 높음 | 낮음 |

## 📈 다음 목표

- [ ] ...
- [ ] ...
\`\`\`

JSON 응답:
\`\`\`json
{
  "total_score": 46,
  "max_score": 50,
  "percentage": 92,
  "grade": "A+",
  "assessment": "탁월함",
  "scores": {
    "code_quality": 5,
    "documentation": 5,
    "architecture": 5,
    "automation": 5,
    "testing": 5,
    "scalability": 5,
    "ux": 4,
    "security": 4,
    "performance": 5,
    "reliability": 4
  },
  "strengths": ["항목1", "항목2", "항목3"],
  "improvements": ["항목1", "항목2", "항목3"],
  "recommendations": [{"priority": 1, "item": "...", "difficulty": "중간"}]
}
\`\`\``,
  {
    label: 'final-report-generation',
    phase: '결과 집계 & 리포트'
  }
)

if (!finalReport) {
  log('❌ Phase 4 실패')
  throw new Error('최종 리포트 생성 실패')
}

// ============================================
// 최종 결과 보고
// ============================================

log('')
log('╔════════════════════════════════════════════════╗')
log('║   ✅ 품질 평가 완료!                           ║')
log('╚════════════════════════════════════════════════╝')
log('')

log(`📊 최종 점수: ${finalReport.total_score}/${finalReport.max_score} (${finalReport.percentage}%)`)
log(`🏆 등급: ${finalReport.grade} - ${finalReport.assessment}`)
log('')

log('💪 주요 강점:')
finalReport.strengths.forEach((s, i) => {
  log(`  ${i+1}. ${s}`)
})

log('')
log('🎯 개선 필요 항목:')
finalReport.improvements.forEach((imp, i) => {
  log(`  ${i+1}. ${imp}`)
})

log('')
log('📈 다음 단계:')
finalReport.recommendations.forEach((rec, i) => {
  log(`  ${i+1}. ${rec.item} (난이도: ${rec.difficulty})`)
})

log('')
log('📅 평가 날짜: ' + new Date().toISOString().split('T')[0])
log('⏰ 평가 시간: ' + new Date().toLocaleTimeString())

return {
  status: 'success',
  message: '품질 평가 완료',
  total_score: finalReport.total_score,
  max_score: finalReport.max_score,
  percentage: finalReport.percentage,
  grade: finalReport.grade,
  assessment: finalReport.assessment,
  timestamp: new Date().toISOString()
}
