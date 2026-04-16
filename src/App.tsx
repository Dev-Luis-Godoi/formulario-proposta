import Form from './forms/Form';
import Header from './forms/Header';

function App() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: "url('/src/assets/logistica-internacional.1.14.jpg')",
      }}
    >
      <div className="min-h-screen w-full bg-black/40 flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center p-4 pt-20 ">
          <div className="bg-[#4682B4] text-white w-full max-w-5xl rounded-xl p-6 shadow-lg flex flex-col justify-center items-center mt-10">
            <h1 className="font-black text-2xl mb-2">Formulário Proposta</h1>

            <p className="font-semibold italic mb-4">Preencha com os dados da empresa:</p>

            <Form />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
