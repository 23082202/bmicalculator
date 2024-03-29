import './App.css';
import './index.css'
import React, { useState } from 'react';

function App() {
  // State
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Function untuk menghitung BMI
  const calcBmi = (event) => {
    event.preventDefault(); // Mencegah pengiriman form

    // Mengambil nilai berat badan (kg) dan tinggi badan (cm) dari state
    const weightKg = weight;
    const heightCm = height;

    if (weightKg === 0 || heightCm === 0) {
      alert('Mohon masukkan berat badan dan tinggi yang valid');
    } else {
      // Menghitung BMI
      const bmi = (weightKg / ((heightCm / 100) * (heightCm / 100))).toFixed(1);
      setBmi(bmi);

      // Menetapkan pesan berdasarkan nilai BMI
      let message = '';
      if (bmi < 18.5) {
        message = 'Anda berada di bawah berat badan normal';
      } else if (bmi >= 18.5 && bmi < 25) {
        message = 'Anda memiliki berat badan normal';
      } else if (bmi >= 25 && bmi < 30) {
        message = 'Anda memiliki kelebihan berat badan';
      } else {
        message = 'Anda memiliki obesitas';
      }
      setMessage(message);
    }
  }

  // Function untuk mereload halaman
  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Jenis Kelamin:</label>
            <div>
              <label htmlFor="male">Laki-laki</label>
              <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
              <label htmlFor="female">Perempuan</label>
              <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
            </div>
          </div>
          <div>
            <label>Usia Anda:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label>Berat Badan (kg):</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Tinggi Badan (cm):</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Hitung BMI</button>
            <button className='btn btn-outline' onClick={reload}>Reload</button>
          </div>
        </form>
        <div className='center'>
          <h3>Perhitungan BMI kamu Adalah: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;