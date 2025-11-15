body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom right, #3a7bd5, #00d2ff);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
}

.title {
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
  margin-bottom: 40px;
}

.emotions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  max-width: 950px;
  margin: 0 auto 40px;
}

.emotion img {
  width: 90px;
  height: 90px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.3s;
}

.emotion img:hover {
  transform: scale(1.1);
}

.emotion p {
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: bold;
}

.upload-form {
  margin-top: 20px;
}

.upload-form input {
  padding: 10px;
  margin-right: 10px;
}

.upload-form button {
  padding: 10px 20px;
  border: none;
  background: #ff9068;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.upload-form button:hover {
  background: #ff4b1f;
}

.result-box {
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.result-box h2 span {
  color: #ffdd00;
}

.uploaded-img {
  margin-top: 15px;
  width: 200px;
  border-radius: 12px;
}
