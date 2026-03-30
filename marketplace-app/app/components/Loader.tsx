'use client';

export default function Loader() {
  return (
    <div className="flex items-center justify-center py-2.5 pb-7.5">
      <style>{`
        @keyframes square1 {
          0% {
            left: 0;
            top: 0;
          }
          8.333% {
            left: 0;
            top: 30px;
          }
          100% {
            left: 0;
            top: 30px;
          }
        }

        @keyframes square2 {
          0% {
            left: 0;
            top: 30px;
          }
          8.333% {
            left: 0;
            top: 60px;
          }
          16.67% {
            left: 30px;
            top: 60px;
          }
          25% {
            left: 30px;
            top: 30px;
          }
          83.33% {
            left: 30px;
            top: 30px;
          }
          91.67% {
            left: 30px;
            top: 0;
          }
          100% {
            left: 0;
            top: 0;
          }
        }

        @keyframes square3 {
          0%, 100% {
            left: 30px;
            top: 30px;
          }
          16.67% {
            left: 30px;
            top: 30px;
          }
          25% {
            left: 30px;
            top: 0;
          }
          33.33% {
            left: 60px;
            top: 0;
          }
          41.67% {
            left: 60px;
            top: 30px;
          }
          66.67% {
            left: 60px;
            top: 30px;
          }
          75% {
            left: 60px;
            top: 60px;
          }
          83.33% {
            left: 30px;
            top: 60px;
          }
          91.67% {
            left: 30px;
            top: 30px;
          }
        }

        @keyframes square4 {
          0% {
            left: 60px;
            top: 30px;
          }
          33.33% {
            left: 60px;
            top: 30px;
          }
          41.67% {
            left: 60px;
            top: 60px;
          }
          50% {
            left: 90px;
            top: 60px;
          }
          58.33% {
            left: 90px;
            top: 30px;
          }
          100% {
            left: 90px;
            top: 30px;
          }
        }

        @keyframes square5 {
          0% {
            left: 90px;
            top: 30px;
          }
          50% {
            left: 90px;
            top: 30px;
          }
          58.33% {
            left: 90px;
            top: 0;
          }
          66.67% {
            left: 60px;
            top: 0;
          }
          75% {
            left: 60px;
            top: 30px;
          }
          100% {
            left: 60px;
            top: 30px;
          }
        }

        @keyframes squarefadein {
          0% {
            transform: scale(0.75);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .loading-spinner {
          width: 146px;
          height: 86px;
          position: relative;
          margin: 0 auto;
        }

        .loading-spinner div {
          display: inline-block;
          background: linear-gradient(135deg, #ff8c00, #ff6b00);
          border: none;
          border-radius: 2px;
          width: 26px;
          height: 26px;
          position: absolute;
          padding: 0;
          margin: 0;
        }

        .loading-spinner #square1 {
          animation: square1 2.4s 0.2s ease-in-out infinite,
                     squarefadein 0.4s 0.1s ease-out both;
        }

        .loading-spinner #square2 {
          animation: square2 2.4s 0.2s ease-in-out infinite,
                     squarefadein 0.4s 0.2s ease-out both;
        }

        .loading-spinner #square3 {
          animation: square3 2.4s 0.2s ease-in-out infinite,
                     squarefadein 0.4s 0.3s ease-out both;
        }

        .loading-spinner #square4 {
          animation: square4 2.4s 0.2s ease-in-out infinite,
                     squarefadein 0.4s 0.4s ease-out both;
        }

        .loading-spinner #square5 {
          animation: square5 2.4s 0.2s ease-in-out infinite,
                     squarefadein 0.4s 0.5s ease-out both;
        }
      `}</style>
      
      <div className="loading-spinner">
        <div id="square1" />
        <div id="square2" />
        <div id="square3" />
        <div id="square4" />
        <div id="square5" />
      </div>
    </div>
  );
}
