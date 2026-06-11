#!/usr/bin/env python3
"""
Daily AI Trend Reporter
AI 동향을 자동으로 수집하고 HTML 리포트를 생성합니다.
"""

import os
import sys
import json
import subprocess
from datetime import datetime
from pathlib import Path


class AITrendReporter:
    """AI 동향 리포트 생성 클래스"""

    def __init__(self, output_dir: str = "reports"):
        """
        초기화

        Args:
            output_dir: 리포트 저장 디렉토리
        """
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)
        self.today = datetime.now()

    def collect_news(self) -> dict:
        """AI 뉴스 수집 (시뮬레이션)"""
        return {
            "news": [
                {"title": "Claude AI 새 기능 출시", "description": "최신 AI 모델 업데이트"},
                {"title": "한국 AI 산업 성장", "description": "국내 투자 확대"},
                {"title": "AI 윤리 규제", "description": "EU, 한국 규제 강화"},
                {"title": "생성형 AI 진화", "description": "더 정교한 모델 개발"},
                {"title": "AI 교육 확산", "description": "학교 도입 증가"}
            ],
            "trends": {
                "domestic": "한국: 교육·의료 중심 AI 활용",
                "global": "글로벌: 미중 AI 기술 경쟁 심화"
            },
            "terms": [
                {"term": "생성형 AI", "definition": "새로운 콘텐츠를 만드는 AI"},
                {"term": "머신러닝", "definition": "데이터로부터 스스로 배우는 기술"},
                {"term": "프롬프트", "definition": "AI에게 하는 질문이나 명령"}
            ]
        }

    def generate_html(self, data: dict) -> str:
        """HTML 리포트 생성"""
        year = self.today.year
        month = self.today.month
        day = self.today.day

        html = f"""<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 동향 리포트 - {year}년 {month}월 {day}일</title>
    <style>
        body {{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.8;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            margin: 0;
        }}
        .container {{
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }}
        h1 {{
            color: #667eea;
            text-align: center;
            border-bottom: 3px solid #667eea;
            padding-bottom: 15px;
        }}
        h2 {{
            color: #764ba2;
            margin-top: 30px;
            padding-left: 10px;
            border-left: 4px solid #667eea;
        }}
        .news-item {{
            background: #f8f9ff;
            padding: 15px;
            margin: 12px 0;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }}
        .term-box {{
            background: #fff3e0;
            padding: 15px;
            margin: 12px 0;
            border-radius: 8px;
            border-left: 4px solid #ff9800;
        }}
        .footer {{
            text-align: center;
            color: #999;
            font-size: 14px;
            margin-top: 30px;
        }}
    </style>
</head>
<body>
    <div class="container">
        <h1>📊 AI 동향 리포트</h1>
        <p style="text-align: center; color: #666;">{year}년 {month}월 {day}일</p>

        <h2>🔥 오늘의 AI 뉴스</h2>
"""

        # 뉴스 추가
        for i, news in enumerate(data["news"], 1):
            html += f"""        <div class="news-item">
            <strong>{i}. {news['title']}</strong><br>
            {news['description']}
        </div>
"""

        # 용어 설명
        html += "        <h2>💡 쉽게 배우는 AI 용어</h2>\n"
        for term in data["terms"]:
            html += f"""        <div class="term-box">
            <strong>{term['term']}</strong><br>
            {term['definition']}
        </div>
"""

        # 트렌드
        html += "        <h2>🌍 국내외 AI 트렌드</h2>\n"
        html += f"""        <p><strong>해외:</strong> {data['trends']['global']}</p>
        <p><strong>국내:</strong> {data['trends']['domestic']}</p>

        <div class="footer">
            <p>📌 이 리포트는 매일 자동으로 생성됩니다.</p>
        </div>
    </div>
</body>
</html>
"""
        return html

    def save_report(self, html: str) -> str:
        """리포트를 파일로 저장"""
        filename = self.output_dir / f"ai-daily-{self.today.strftime('%Y-%m-%d')}.html"
        filename.write_text(html, encoding='utf-8')
        return str(filename)

    def run(self) -> dict:
        """전체 프로세스 실행"""
        try:
            # 뉴스 수집
            data = self.collect_news()

            # HTML 생성
            html = self.generate_html(data)

            # 파일 저장
            filepath = self.save_report(html)

            return {
                "status": "success",
                "message": "리포트 생성 완료",
                "filepath": filepath,
                "timestamp": self.today.isoformat()
            }
        except Exception as e:
            return {
                "status": "error",
                "message": str(e),
                "timestamp": self.today.isoformat()
            }


def main():
    """메인 함수"""
    reporter = AITrendReporter()
    result = reporter.run()

    # 결과 출력
    print(json.dumps(result, ensure_ascii=False, indent=2))

    # 상태 코드 반환
    return 0 if result["status"] == "success" else 1


if __name__ == "__main__":
    sys.exit(main())
