import { Obstacle } from '../../types/game';
import { ObstacleType } from './obstacleTypes';

const drawCactus = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  ctx.fillStyle = '#2D5A27';
  ctx.fillRect(
    obstacle.x,
    obstacle.y - obstacle.height,
    obstacle.width,
    obstacle.height
  );
  
  // Add spikes
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const x = obstacle.x + (obstacle.width * (i + 1)) / 6;
    const height = obstacle.height * 0.3;
    ctx.moveTo(x, obstacle.y - obstacle.height * 0.7);
    ctx.lineTo(x - 5, obstacle.y - obstacle.height * 0.7 - height);
    ctx.lineTo(x + 5, obstacle.y - obstacle.height * 0.7);
  }
  ctx.fillStyle = '#1A472A';
  ctx.fill();
};

const drawRock = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  ctx.fillStyle = '#8B7355';
  ctx.beginPath();
  ctx.moveTo(obstacle.x, obstacle.y);
  ctx.lineTo(obstacle.x + obstacle.width / 2, obstacle.y - obstacle.height);
  ctx.lineTo(obstacle.x + obstacle.width, obstacle.y);
  ctx.closePath();
  ctx.fill();
  
  // Add texture
  ctx.strokeStyle = '#6B4423';
  ctx.lineWidth = 2;
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(obstacle.x + (obstacle.width * i / 3), obstacle.y - (obstacle.height * 0.3));
    ctx.lineTo(obstacle.x + (obstacle.width * (i + 1) / 3), obstacle.y - (obstacle.height * 0.6));
    ctx.stroke();
  }
};

const drawTent = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  ctx.fillStyle = '#FF6B00';
  
  // Tent body
  ctx.beginPath();
  ctx.moveTo(obstacle.x, obstacle.y);
  ctx.lineTo(obstacle.x + obstacle.width / 2, obstacle.y - obstacle.height);
  ctx.lineTo(obstacle.x + obstacle.width, obstacle.y);
  ctx.closePath();
  ctx.fill();
  
  // Entrance
  ctx.fillStyle = '#000000';
  const doorWidth = obstacle.width * 0.3;
  const doorHeight = obstacle.height * 0.4;
  ctx.fillRect(
    obstacle.x + (obstacle.width - doorWidth) / 2,
    obstacle.y - doorHeight,
    doorWidth,
    doorHeight
  );
};

const drawArtCar = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  ctx.fillStyle = '#E6B89C';
  
  // Car body
  ctx.fillRect(
    obstacle.x,
    obstacle.y - obstacle.height * 0.6,
    obstacle.width,
    obstacle.height * 0.6
  );
  
  // Top part
  ctx.beginPath();
  ctx.moveTo(obstacle.x + obstacle.width * 0.2, obstacle.y - obstacle.height * 0.6);
  ctx.lineTo(obstacle.x + obstacle.width * 0.5, obstacle.y - obstacle.height);
  ctx.lineTo(obstacle.x + obstacle.width * 0.8, obstacle.y - obstacle.height * 0.6);
  ctx.closePath();
  ctx.fill();
  
  // Wheels
  ctx.fillStyle = '#000000';
  const wheelSize = obstacle.height * 0.2;
  ctx.beginPath();
  ctx.arc(obstacle.x + wheelSize, obstacle.y, wheelSize, 0, Math.PI * 2);
  ctx.arc(obstacle.x + obstacle.width - wheelSize, obstacle.y, wheelSize, 0, Math.PI * 2);
  ctx.fill();
};

const drawPortoPotti = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  const x = obstacle.x;
  const y = obstacle.y;
  const width = obstacle.width;
  const height = obstacle.height;

  // Main body - slightly darker blue
  ctx.fillStyle = '#0066CC';
  ctx.fillRect(
    x,
    y - height,
    width,
    height
  );

  // Roof overhang
  ctx.fillStyle = '#004C99';
  ctx.fillRect(
    x - width * 0.05,
    y - height - height * 0.05,
    width * 1.1,
    height * 0.05
  );

  // Door with inset effect
  ctx.fillStyle = '#004C99';
  const doorX = x + width * 0.1;
  const doorWidth = width * 0.8;
  const doorHeight = height * 0.75;
  const doorY = y - height * 0.85;
  
  // Door frame shadow
  ctx.fillStyle = '#003366';
  ctx.fillRect(doorX - 2, doorY - 2, doorWidth + 4, doorHeight + 4);
  
  // Door panel
  ctx.fillStyle = '#0059B3';
  ctx.fillRect(doorX, doorY, doorWidth, doorHeight);

  // Door handle
  ctx.fillStyle = '#C0C0C0';
  const handleWidth = width * 0.15;
  const handleHeight = height * 0.08;
  ctx.fillRect(
    x + width * 0.7,
    y - height * 0.55,
    handleWidth,
    handleHeight
  );

  // Vent stack
  ctx.fillStyle = '#004C99';
  const ventWidth = width * 0.2;
  const ventHeight = height * 0.25;
  ctx.fillRect(
    x + width * 0.7,
    y - height - ventHeight,
    ventWidth,
    ventHeight
  );

  // Ventilation holes
  ctx.fillStyle = '#003366';
  const holeSize = width * 0.05;
  const holeSpacing = width * 0.08;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.fillRect(
        x + width * 0.2 + j * holeSpacing,
        y - height * 0.95 + i * holeSpacing,
        holeSize,
        holeSize
      );
    }
  }

  // Add subtle texture/panel lines
  ctx.strokeStyle = '#0059B3';
  ctx.lineWidth = 1;
  
  // Vertical panel lines
  for (let i = 1; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(x + (width * i) / 3, y - height);
    ctx.lineTo(x + (width * i) / 3, y);
    ctx.stroke();
  }

  // Horizontal panel line
  ctx.beginPath();
  ctx.moveTo(x, y - height * 0.3);
  ctx.lineTo(x + width, y - height * 0.3);
  ctx.stroke();
};

export const drawObstacle = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  switch (obstacle.type as ObstacleType) {
    case 'cactus':
      drawCactus(ctx, obstacle);
      break;
    case 'rock':
      drawRock(ctx, obstacle);
      break;
    case 'tent':
      drawTent(ctx, obstacle);
      break;
    case 'artCar':
      drawArtCar(ctx, obstacle);
      break;
    case 'portoPotti':
      drawPortoPotti(ctx, obstacle);
      break;
  }
};