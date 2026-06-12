/**
 * Daily AI Briefing Harness
 *
 * 매일 AI 동향을 자동 수집 → 브리핑 생성 → GitHub 게시하는 완전 자동화 파이프라인
 *
 * 공식문서 기준 Workflow 하네스 구조:
 * - Phase 1: 뉴스 수집 (news-collector 에이전트)
 * - Phase 2: 브리핑 생성 (report-writer 에이전트)
 * - Phase 3: 검증 & 게시 (최종 검증)
 */

export const meta = {
  name: 'daily-ai-briefing-harness',
  description: '매일 AI 동향을 자동 수집, 브리핑 생성, GitHub 게시. 8개 신뢰 소스에서 TOP 5 뉴스를 수집하고 전문적인 HTML 브리핑을 생성해서 자동으로 게시합니다.',
  phases: [
    {
      title: '뉴스 수집',
      detail: '8개 신뢰 소스(OpenAI, DeepMind, HackerNews 등)에서 AI 뉴스 TOP 5 수집'
    },
    {
      title: '브리핑 생성',
      detail: '수집한 뉴스로 전문적인 HTML 브리핑 파일(ai-daily-YYYY-MM-DD.html) 생성'
    },
    {
      title: '게시 & 검증',
      detail: 'GitHub에 커밋 & 푸시, Issues 자동 댓글, DASHBOARD.md 업데이트'
    }
  ]
}

// ============================================
// Phase 1: 뉴스 수집
// ============================================

phase('뉴스 수집')
log('📰 AI 뉴스 8개 소스에서 수집 중...')

const newsData = await agent(
  `당신은 AI 뉴스 수집 전문가입니다.

다음 8개 신뢰 소스에서 오늘의 AI 뉴스를 수집해주세요:
1. OpenAI 공식 블로그 (ChatGPT, GPT 모델)
2. Google DeepMind 블로그 (Gemini, 기초 연구)
3. HackerNews AI 섹션
4. TechCrunch AI 섹션
5. 뉴스1/연합뉴스 AI 섹션
6. ArXiv AI 분야
7. Papers with Code
8. Reddit r/MachineLearning

**작업**:
1. 각 소스에서 최신 뉴스 검색 (24시간 이내)
2. 중복 제거 & 신뢰도 검증
3. 중요도순 TOP 5 선정
4. 일반인도 이해할 수 있게 설명 작성
5. AI 관련 용어 3개 선택 & 설명 추가

**출력 형식**:
\`\`\`json
{
  "date": "YYYY-MM-DD",
  "top_news": [
    {
      "rank": 1,
      "title": "뉴스 제목",
      "description": "한두 문장 설명",
      "why_important": "왜 중요한가",
      "source": "소스명",
      "url": "URL"
    }
  ],
  "terms": [
    {
      "term": "용어",
      "explanation": "일반인 수준 설명"
    }
  ],
  "trends": {
    "domestic": "국내 트렌드",
    "international": "해외 트렌드"
  }
}
\`\`\``,
  {
    label: 'news-collection',
    phase: '뉴스 수집'
  }
)

if (!newsData || newsData.error) {
  log('❌ 뉴스 수집 실패')
  throw new Error('뉴스 수집 에이전트 오류')
}

log(`✅ 뉴스 수집 완료: TOP 5 뉴스 + 용어 3개`)

// ============================================
// Phase 2: 브리핑 생성
// ============================================

phase('브리핑 생성')
log('📝 HTML 브리핑 생성 중...')

const reportOutput = await agent(
  `당신은 HTML 브리핑 작성 전문가입니다.

다음 뉴스 데이터로 전문적인 HTML 브리핑을 생성해주세요:

${JSON.stringify(newsData, null, 2)}

**작업**:
1. ai-daily-YYYY-MM-DD.html 파일명으로 HTML 생성 (오늘 날짜 사용)
2. 다음 섹션 포함:
   - 헤더 (타이틀, 날짜, 그라디언트 스타일)
   - TOP 5 뉴스 (카드 형식)
   - 오늘의 AI 용어 (3개)
   - 국내외 트렌드 요약
3. 반응형 디자인 (모바일 친화적)
4. 전문적이면서 이해하기 쉬운 톤
5. 모든 뉴스에 출처 URL 포함

**출력**:
- 생성된 HTML 파일 경로와 크기 보고
- 파일 검증 (비어있지 않음, 형식 정상)`,
  {
    label: 'report-generation',
    phase: '브리핑 생성'
  }
)

if (!reportOutput || reportOutput.error) {
  log('❌ 브리핑 생성 실패')
  throw new Error('브리핑 생성 에이전트 오류')
}

log(`✅ 브리핑 생성 완료`)

// ============================================
// Phase 3: 게시 & 검증
// ============================================

phase('게시 & 검증')
log('🚀 GitHub 게시 & 최종 검증 중...')

const publishResult = await agent(
  `당신은 GitHub 자동화 및 검증 전문가입니다.

다음 작업을 실행해주세요:

**1. Git 커밋 & 푸시**
\`\`\`bash
cd C:\\Users\\Admin\\Desktop\\workspace\\ai-reports
git add ai-daily-*.html
git commit -m "feat: AI 브리핑 {오늘날짜} 자동 생성"
git push origin main
\`\`\`

**2. GitHub Issues 자동 댓글**
- Issue #2에 브리핑 생성 완료 댓글 추가
- 파일명, 크기, 생성 시간 포함

**3. DASHBOARD.md 업데이트**
- 최신 브리핑 파일 정보 추가
- 생성 시간 업데이트
- 완료율 갱신

**4. 최종 검증**
- 파일명 형식 확인 (ai-daily-YYYY-MM-DD.html)
- GitHub 푸시 성공 확인
- Issues 댓글 게시 확인

**보고**:
- ✅ 또는 ❌ 상태
- 각 단계별 결과
- 실패 시 원인과 해결 방법`,
  {
    label: 'validation-publish',
    phase: '게시 & 검증'
  }
)

if (!publishResult || publishResult.error) {
  log('❌ 게시 & 검증 실패')
  throw new Error('게시 & 검증 에이전트 오류')
}

log(`✅ 모든 단계 완료!`)

// ============================================
// 최종 보고
// ============================================

log('')
log('╔════════════════════════════════════════╗')
log('║   ✅ 브리핑 팀 작업 완료               ║')
log('╚════════════════════════════════════════╝')
log('')
log('📊 작업 요약:')
log(`   [Phase 1] 뉴스 수집: TOP 5 + 용어 3개`)
log(`   [Phase 2] 브리핑 생성: HTML 파일`)
log(`   [Phase 3] 게시 & 검증: GitHub 완료`)
log('')
log(`📅 다음 실행: 내일 09:00 AM`)
log('')

return {
  status: 'success',
  message: '브리핑 자동 생성 & 게시 완료',
  timestamp: new Date().toISOString(),
  newsCount: 5,
  termsCount: 3,
  phases: ['뉴스 수집', '브리핑 생성', '게시 & 검증']
}
