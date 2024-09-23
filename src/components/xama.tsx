import { useState } from "react";

// aqui eu criei uma props que vai ser passada pro meu cpnt
interface props {
  texto: string;
  bg_text?: string;
}

export default function Xama({ texto, bg_text = "bg-red-500" }: props) {
  const [opa, setOpa] = useState<boolean>();

  return (
    <div>
      <h1 className="text-white">Xama</h1>
      <p className={`${bg_text} p-6 border-white border-4 rounded-xl`}>
        {texto}
      </p>
      <button>opa</button>
    </div>
  );
}
