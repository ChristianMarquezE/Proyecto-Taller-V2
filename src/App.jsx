import { useEffect, useMemo, useState } from 'react';

const INITIAL_TIME = 900;

const ROOMS = [
  {
    id: 1,
    title: 'Sala 1 - El Código Perdido',
    story:
      'Despiertas en una habitación cerrada. En la pared aparece el mensaje: “La clave está en el número favorito de los programadores”.',
    clue: 'Pista: Es un número muy conocido en informática.',
    answer: '404',
    points: 100,
    tool: '🖥️ Terminal Virtual: Error 404 = Not Found'
  },
  {
    id: 2,
    title: 'Sala 2 - El Servidor',
    story:
      'Encuentras un servidor bloqueado. Una nota dice: “La contraseña es el protocolo seguro utilizado por las páginas web”.',
    clue: 'Pista: Comienza con H y termina con S.',
    answer: 'https',
    points: 150,
    tool: '🌐 Navegador Virtual: HTTP + Seguridad = HTTPS'
  },
  {
    id: 3,
    title: 'Sala 3 - La Criptografía',
    story: 'Hay un mensaje cifrado: “Uifsf jt b tfdsfu lfz”.',
    clue: 'Pista: Cada letra fue desplazada +1 en el alfabeto.',
    answer: 'there is a secret key',
    points: 200,
    tool: '🔐 Herramienta César: Desplaza las letras -1'
  },
  {
    id: 4,
    title: 'Sala Final - Escape',
    story:
      'La puerta final requiere una combinación secreta. Debes sumar los puntos obtenidos y escribir el total exacto.',
    clue: 'Pista: Suma todos los puntos ganados.',
    answer: '450',
    points: 500,
    tool: '🧮 Calculadora Integrada'
  }
];

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function normalizeText(text) {
  return text.trim().toLowerCase();
}

export default function EscapeRoomGame() {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(INITIAL_TIME);
  const [inventory, setInventory] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const currentRoom = useMemo(() => {
    return ROOMS[currentRoomIndex];
  }, [currentRoomIndex]);

  useEffect(() => {
    if (gameFinished || gameOver) {
      return undefined;
    }

    const interval = setInterval(() => {
      setTimer((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(interval);
          setGameOver(true);
          setMessage('⏰ Tiempo agotado. El Escape Room se ha cerrado.');
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [gameFinished, gameOver]);

  const resetGame = () => {
    setCurrentRoomIndex(0);
    setInput('');
    setMessage('');
    setScore(0);
    setTimer(INITIAL_TIME);
    setInventory([]);
    setGameFinished(false);
    setGameOver(false);
  };

  const handleSubmit = () => {
    if (!currentRoom || !input.trim()) {
      return;
    }

    const normalizedInput = normalizeText(input);
    const normalizedAnswer = normalizeText(currentRoom.answer);

    if (normalizedInput !== normalizedAnswer) {
      setMessage('❌ Respuesta incorrecta. Intenta nuevamente.');
      return;
    }

    const updatedScore = score + currentRoom.points;

    setScore(updatedScore);
    setInventory((previousInventory) => [
      ...previousInventory,
      `Llave Sala ${currentRoom.id}`
    ]);

    setMessage(`✅ Correcto. Has ganado ${currentRoom.points} puntos.`);
    setInput('');

    setTimeout(() => {
      const nextRoomIndex = currentRoomIndex + 1;

      if (nextRoomIndex < ROOMS.length) {
        setCurrentRoomIndex(nextRoomIndex);
        setMessage('');
        return;
      }

      setGameFinished(true);
    }, 1200);
  };

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-zinc-900 border border-green-500 rounded-3xl p-10 text-center shadow-2xl">
          <h1 className="text-5xl font-bold text-green-400 mb-6">
            🎉 ¡ESCAPASTE!
          </h1>

          <p className="text-xl mb-6">
            Has completado exitosamente el Escape Room Hacker.
          </p>

          <div className="text-3xl font-bold text-yellow-400 mb-8">
            Puntaje Final: {score}
          </div>

          <div className="bg-zinc-800 rounded-2xl p-5 text-left mb-8">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              🏆 Objetos Conseguidos
            </h2>

            <ul className="space-y-3">
              {inventory.map((item, index) => (
                <li key={`${item}-${index}`}>
                  🔑 {item}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={resetGame}
            className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-black font-bold px-6 py-3 rounded-2xl"
          >
            Reiniciar Juego
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900 rounded-3xl p-8 border border-zinc-700 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-cyan-400 mb-2">
                🏚️ Escape Room Hacker
              </h1>

              <p className="text-zinc-400 text-lg">
                Resuelve todos los acertijos antes de que el tiempo termine.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <div className="bg-zinc-800 rounded-2xl px-5 py-3 min-w-[120px] text-center">
                <div className="text-zinc-400 text-sm mb-1">Puntos</div>
                <div className="text-2xl font-bold text-yellow-400">
                  {score}
                </div>
              </div>

              <div className="bg-zinc-800 rounded-2xl px-5 py-3 min-w-[120px] text-center">
                <div className="text-zinc-400 text-sm mb-1">Tiempo</div>
                <div className="text-2xl font-bold text-red-400">
                  {formatTime(timer)}
                </div>
              </div>
            </div>
          </div>

          {gameOver ? (
            <div className="bg-red-950 border border-red-500 rounded-3xl p-10 text-center">
              <h2 className="text-4xl font-bold text-red-400 mb-4">
                ☠️ Juego Terminado
              </h2>

              <p className="text-lg text-zinc-300 mb-6">
                El tiempo se agotó y no lograste escapar.
              </p>

              <button
                onClick={resetGame}
                className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-2xl font-bold"
              >
                Intentar Nuevamente
              </button>
            </div>
          ) : (
            <div className="bg-zinc-800 rounded-3xl p-6 border border-zinc-700">
              <div className="mb-4">
                <span className="bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Nivel {currentRoom.id}
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-5">
                {currentRoom.title}
              </h2>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                {currentRoom.story}
              </p>

              <div className="bg-black border border-cyan-500 rounded-2xl p-5 mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  🧩 Pista
                </h3>

                <p>{currentRoom.clue}</p>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ingresa tu respuesta"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl p-4 text-lg focus:outline-none focus:border-cyan-400"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSubmit();
                    }
                  }}
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-black font-bold py-4 rounded-2xl text-lg"
                >
                  Resolver Acertijo
                </button>
              </div>

              {message && (
                <div className="mt-6 bg-zinc-950 border border-zinc-700 rounded-2xl p-4 text-center text-lg">
                  {message}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-700 shadow-2xl">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              🛠️ Herramientas
            </h2>

            <div className="bg-zinc-800 rounded-2xl p-4 text-zinc-300 leading-relaxed">
              {currentRoom.tool}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-700 shadow-2xl">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              🎒 Inventario
            </h2>

            {inventory.length === 0 ? (
              <p className="text-zinc-400">
                Aún no has conseguido ningún objeto.
              </p>
            ) : (
              <ul className="space-y-3">
                {inventory.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="bg-zinc-800 rounded-xl px-4 py-3"
                  >
                    🔑 {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-red-500 shadow-2xl">
            <h2 className="text-2xl font-bold text-red-400 mb-4">
              📜 Reglas del Juego
            </h2>

            <ul className="space-y-3 text-zinc-300 list-disc pl-5">
              <li>Debes resolver todas las salas.</li>
              <li>Cada acertijo entrega puntos.</li>
              <li>El tiempo es limitado.</li>
              <li>Utiliza las pistas disponibles.</li>
              <li>Solo escaparás si completas todas las pruebas.</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-cyan-500 shadow-2xl">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              ✅ Verificaciones Implementadas
            </h2>

            <ul className="space-y-3 text-zinc-300 list-disc pl-5">
              <li>Validación de respuestas.</li>
              <li>Normalización de texto.</li>
              <li>Control de temporizador.</li>
              <li>Prevención de errores de React undefined.</li>
              <li>Reinicio completo del juego.</li>
              <li>Renderizado seguro de salas.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
