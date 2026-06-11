# 🐛 Issues & Tasks

## Issue #1: Git 인증 설정 필요
**Priority:** 🔴 High  
**Status:** 🔴 Open

### 문제점
스케줄 작업이 자동으로 실행될 때 HTTPS 인증으로 인해 푸시가 실패할 수 있습니다.

- 현재 https://github.com 주소로 설정
- 자동 실행 시 대화형 입력 불가능
- GitHub 인증 필요

### 해결 방안
1. SSH 키 설정
2. Personal Access Token(PAT) 사용

---

## Issue #2: 파일명 동적 생성 검증
**Priority:** 🟡 Medium  
**Status:** 🔴 Open

### 문제점
스케줄 작업이 실행될 때 파일명이 올바른 YYYY-MM-DD 형식으로 생성되는지 확인 필요.

- 스케줄 프롬프트에서 동적 날짜 생성
- 형식이 제대로 지켜질지 불확실

### 해결 방안
- 실제 실행 후 파일명 검증
- 필요시 프롬프트 수정

---

## Issue #3: 에러 처리 추가
**Priority:** 🟡 Medium  
**Status:** 🔴 Open

### 문제점
스케줄 작업에서 git 푸시가 실패할 경우의 에러 처리가 없습니다.

- git push 실패 시 아무 알림 없음
- 에러 로깅 없음
- 재시도 로직 없음

### 해결 방안
- 에러 메시지 추가
- 실패 로그 기록
- 필요시 재시도 로직 추가

---

**Created:** 2026-06-11  
**Updated:** 2026-06-11
