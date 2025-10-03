import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const endDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days from now

    const updateCountdown = () => {
      const now = new Date();
      const difference = endDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <span>{timeLeft.days || 0} JOURS / </span>
      <span>{timeLeft.hours || 0} HEURES / </span>
      <span>{timeLeft.minutes || 0} MINUTES / </span>
      <span>{timeLeft.seconds || 0} SECONDES</span>
    </div>
  );
};

export default Countdown;