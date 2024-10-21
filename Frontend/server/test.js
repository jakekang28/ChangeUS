const express = require("express");
const http = require("http");
const websocket = require("ws"); // WebSocket 서버

const app = express();
app.set("port", process.env.PORT || 4001); // 포트 설정

// HTTP 서버 생성
const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});

// WebSocket 서버 생성
const wss = new websocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("클라이언트가 연결되었습니다.");
  // 메시지 수신 이벤트
  ws.on("message", (message) => {
    console.log("클라이언트로부터 메시지 수신:", message);
    ws.send(`서버 응답: ${message}`); // 받은 메시지를 그대로 응답
  });

  // 연결 해제 이벤트
  ws.on("close", () => {
    console.log("클라이언트 연결이 종료되었습니다.");
  });
});
