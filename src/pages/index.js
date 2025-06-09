import Image from "next/image";
import { FaWhatsapp, FaLightbulb, FaCouch, FaDollarSign, FaIndustry, FaRegHandshake, FaBox, FaCogs, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { MdOutlineCheckCircle, MdOutlineHighQuality } from "react-icons/md";
import { useEffect, useState } from "react";
import Aos from "aos";
import Head from "next/head";

export default function Home() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);


  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Móveis Planejados em São Paulo | TA Planejados</title>
        <meta name="description" content="Transforme sua casa com móveis planejados sob medida em até 12x no cartão. Atendimento personalizado, entrega rápida e profissionais com 10 anos de experiência. Consulte!" />
        <meta property="og:title" content="Móveis Planejados em São Paulo | TA Planejados" />
        <meta property="og:description" content="Transforme sua casa com móveis planejados sob medida em até 12x no cartão. Atendimento personalizado, entrega rápida e profissionais com 10 anos de experiência." />
        <meta property="og:image" content="/miniatura.jpg" />
        <meta property="og:url" content="https://www.taplanelados.com" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.taplanelados.com" />
        <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "TA Planejados",
                "image": "https:///www.taplanelados.com/miniatura.jpg",
                "telephone": "+5511951137030",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua. Xavier de Oliveira 45, Zona Leste",
                  "addressLocality": "São Paulo",
                  "addressRegion": "SP",
                  "postalCode": "03560-050",
                  "addressCountry": "BR"
                }
              }
            `}
        </script>
      </Head>
      <main>
        <section className="relative flex-col justify-center items-center w-full h-[80vh] lg:h-[100vh] bg-[url('/background.jpg')] bg-cover bg-center" id="inicio">
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
          <div className="absolute top-10 h-16 w-[80%] lg:w-[60%] bg-[#0E2843] z-10">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="flex justify-end items-center h-full">
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-[#FFFFFF] text-lg lg:text-2xl xl:text-3xl font-extrabold pr-8">MÓVEIS SOB MEDIDA</p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="hidden sm:block absolute bottom-10 h-90 w-[70%] lg:w-[50%] bg-[#0E2843] z-10"></div>

          <div className="relative flex justify-center items-center w-full h-full z-10">
            <div className="hidden sm:block w-full h-[40vh] lg:h-[90vh]">
              <Image
                src="/image-woman.png"
                alt="Imagem mulher apontando"
                fill
                data-aos="fade-right"
                data-aos-duration="2000"
                className="object-cover transform -translate-x-25 lg:object-contain lg:transform lg:-translate-x-60"
              />
            </div>

            <div className="flex flex-col lg:absolute lg:right-17 lg:w-[34%]">
              <div className="w-full xl:mt-15">
                <h1
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.86)" }}
                  className="relative text-6xl mx-1 lg:text-7xl font-black text-[#FFFFFF]"
                >
                  Móveis Planejados
                </h1>
                <div className="relative inline-block mx-1" style={{ minWidth: 280 }}>
                  <span
                    style={{
                      fontFamily: '"Raleway", sans-serif',
                      textShadow: "4px 4px 6px rgba(251, 2, 2, 0.86)",
                    }}
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className="text-6xl lg:text-8xl font-extrabold text-[#FFFFFF] block"
                  >
                    <span className="relative text-5xl lg:text-6xl inline-block">em até 12x</span>
                    <span className="absolute bottom-1 md:bottom-1 lg:bottom-3 text-xs lg:text-sm p-2 border border-solid border-[#0E2843] bg-[#BE1E21] rounded-2xl whitespace-nowrap">
                      no cartão
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex justify-center mt-5 xl:mt-15">
                <a
                  href="https://wa.me/5511951137030?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    className="flex items-center px-15 lg:px-45 py-7 text-lg text-[#FFFFFF] font-semibold bg-[#128C7E] hover:bg-[#0e705f] whitespace-nowrap transition cursor-pointer animate-pulse"
                    type="button"
                  >
                    Solicitar Orçamento
                    <FaWhatsapp className="pl-1" size={32} color="#25D366" />
                  </button>
                </a>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="flex justify-center mt-9">
                <Image
                  src="/ta-planejados.png"
                  alt="Logo Ta Planejados"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <button
            onClick={() => {
              document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`fixed z-50 bottom-6 right-6 bg-[#25D366] rounded-full shadow-lg transition-all duration-300 animate-pulse cursor-pointer ${show ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"} w-16 h-16 flex items-center justify-center`} aria-label="Fale conosco pelo WhatsApp"
          >
            <FaWhatsapp size={32} color="#fff" />
          </button>
          <div className="text-center flex lg:justify-center text-[#FFFFFF] text-3xl font-extrabold py-3 bg-[#BE1E21]">
            <h3 className="px-[5%]">Apresentamos uma nova forma de pensar o seu espaço</h3>
          </div>
          <div>
            <div className="mt-15 flex justify-center text-[#0E2843]">
              <h2
                data-aos="fade-left"
                data-aos-duration="2000"
                className="text-center text-4xl font-black uppercase px-[5%]"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >Um planejado não é só um móvel. É a realização de um sonho!</h2>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="flex justify-center py-5 px-[5%] lg:px-[20%] mb-10">
              <p className="font-medium text-center">Sabemos da <span className="text-[#BE1E21]">importância do seu sonho</span> e, por isso, cuidamos de cada detalhe.
                Do <span className="text-[#BE1E21]">planejamento ao prazo de entrega</span>, tudo é feito com muito carinho para você.
                Nosso maior objetivo é a realização do seu sonho e a certeza de termos participado de cada etapa.
                Nosso compromisso é atendê-lo cada vez melhor, respeitando os prazos e <span className="text-[#BE1E21]">tomando todos os cuidados necessários</span> na montagem do seu móvel.
              </p>
            </div>
            <div className="flex flex-col items-center lg:flex-row justify-center px-[10%]">
              <div className="lg:w-[200px] lg:h-[200px]">
                <Image
                  src="/ta.png"
                  alt="Logo Ta Planejados"
                  width={350}
                  height={350}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className=" lg:w-[40%] lg:ml-20">
                <p className="font-medium leading-[2]">A TA PLANEJADOS, tem construido historias e conquistados seu espaço no setor moveleiro, com preços atraentes e excelencia na qualidade e na entrega, nossa equipe tem cativado
                  nossos clientes com um atendimento personalizado, e com isso, temos conquistado cada vez mais espaço no mercado moveleiro.
                  <span className="text-[#BE1E21]"> Acreditamos que o nosso diferencial é o atendimento personalizado</span>, onde cada cliente é tratado como único.
                  Temos uma equipe de profissionais altamente qualificados, que estão sempre prontos para atender as necessidades dos nossos clientes.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center px-[5%]">
                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="flex-colum text-center mt-15">
                  <h3 className="text-2xl font-extrabold text-[#0E2843] mb-3">Esqueça o convencional. Aqui, cada detalhe é único.</h3>
                  <p className="text-center font-medium lg:px-[20%] mb-10">
                    Com mais de <span className="text-[#BE1E21]">10 anos de experiência</span> no mercado, somos especialistas em móveis planejados, oferecendo soluções personalizadas para transformar o seu espaço em um ambiente único e funcional.
                  </p>
                </div>
                <div
                  data-aos="flip-up"
                  data-aos-duration="2000"
                  className="relative flex justify-center mb-10">
                  <Image
                    src="/planejado-cozinha-azul.jpeg"
                    alt="Imagem moveis planejados"
                    width={500}
                    height={500}
                    className="relative rounded-3xl z-420"
                  />
                  <div className="absolute -top-4 bg-[#0E2843] rounded-3xl left-[-3%] w-full h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0E2843] pb-10">
          <div className="flex items-center justify-center bg-[#BE1E21] py-16">
            <FaLightbulb className="text-[#FFFFFF] text-6xl" />
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mt-4 text-xl text-[#FFFFFF] text-center font-bold">A ESCOLHA INTELIGENTE PARA <span className="text-[#0E2843]">ECONOMIZAR</span> DE VERDADE!</p>
            <FaLightbulb className="text-[#FFFFFF] text-6xl" />
          </div>
          <div className="flex flex-col items-center pt-20 px-[5%] xl:px-[30%]">
            <Image
              src="/ta-planejados.png"
              alt="Logo ta moveis planejados"
              width={300}
              height={300}
              data-aos="flip-down"
              data-aos-duration="2000"
              className=" my-10"
            />
            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              className="text-white font-bold mb-5">Cortes especiais, acabamentos diferenciados, portas com detalhes únicos. Nossa estrutura permite um nível de personalização que vai muito além.</p>
          </div>
          <div className="flex flex-wrap justify-center w-full pt-5 gap-5 lg:gap-5">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="relative flex flex-col mx-3 lg:gap-4 lg:mr-4 lg:mb-4">
              <Image
                src="/sala.jpg"
                alt="Imagem moveis planejados"
                width={450}
                height={450}
                className=" rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-4 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Painel Planejado</h3>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="relative mx-3">
              <Image
                src="/guarda-roupa-bege.jpg"
                alt="Imagem moveis planejados"
                width={450}
                height={450}
                className="rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-8 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Guarda Roupa Casal Planejado</h3>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="relative flex flex-col mx-3 lg:gap-4 lg:ml-4">
              <Image
                src="/cozinha-verde.jpg"
                alt="Imagem moveis planejados"
                width={450}
                height={450}
                className="rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-8 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Armario Planejados</h3>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="relative mx-3">
              <Image
                src="/guarda-roupa-aberto.jpg"
                alt="Imagem moveis planejados"
                width={450}
                height={450}
                className="rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-4 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Guarda Roupa Planejado</h3>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="relative flex flex-col mx-3 lg:gap-4 lg:mr-4 lg:ml-4">
              <Image
                src="/cozinha-bege.jpg"
                alt="Imagem moveis planejados"
                width={450}
                height={450}
                className="rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-4 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Cozinha Planejada Pequena</h3>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="relative mx-3">
              <Image
                src="/cozinha-musgo.jpg"
                alt="Imagem moveis planejados"
                width={450}
                height={450}
                className="rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-4 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Cozinhas Planejadas</h3>
            </div>
          </div>
        </section>

        <section className="py-20">

          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="text-center">
            <h2 className="text-3xl font-bold mb-20">UMA <span className="text-[#BE1E21]">NOVA EXPERIÊNCIA</span> EM PLANEJADO</h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-center mx-5">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="relative w-full h-[350px] md:h-[600px] lg:ml-5">
              <Image
                src="/processo.jpg"
                alt="Imagem do processo TA Planejados"
                fill
                className="relative rounded-3xl z-420"
              />
              <div className="absolute -top-4 left-[-3%] w-full h-full md:left-[-2%] md:-top-5 lg:-top-5 lg:left-[-2%] bg-[#0E2843] rounded-3xl"></div>
            </div>
            <div className="flex flex-col gap-8 lg:pl-8">
              <ul className="space-y-6">
                <li
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="flex items-center lg:items-start gap-4">
                  <FaCouch className="text-[#BE1E21] text-8xl lg:text-5xl" />
                  <div>
                    <h3 className="lg:text-lg font-bold">Escolha Seu Projeto:</h3>
                    <p>Selecione o design que faz seu coração bater mais forte.</p>
                  </div>
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="flex items-center lg:items-start gap-4">
                  <MdOutlineCheckCircle className="text-[#BE1E21] text-8xl lg:text-5xl" />
                  <div>
                    <h3 className="text-lg font-bold">Assessoria Personalizada:</h3>
                    <p>
                      Juntos, adaptamos o projeto ao seu espaço e estilo de vida.
                    </p>
                  </div>
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="flex items-center lg:items-start gap-4">
                  <FaIndustry className="text-[#BE1E21] text-8xl lg:text-5xl" />
                  <div>
                    <h3 className="text-lg font-bold">Entrega Direta da Indústria:</h3>
                    <p>
                      Receba tudo no conforto do seu lar e conte com nosso suporte
                      para realizar o seu projeto.
                    </p>
                  </div>
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="flex items-center lg:items-start gap-4">
                  <FaDollarSign className="text-[#BE1E21] text-8xl lg:text-5xl" />
                  <div>
                    <h3 className="text-lg font-bold">Economia Real:</h3>
                    <p>
                      Ao eliminar custos operacionais desnecessários, conseguimos
                      repassar essa economia diretamente para você.
                    </p>
                  </div>
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="flex items-center lg:items-start gap-4">
                  <MdOutlineHighQuality className="text-[#BE1E21] text-8xl lg:text-5xl" />
                  <div>
                    <h3 className="text-lg font-bold">Qualidade Inigualável:</h3>
                    <p>
                      Não abrimos mão da qualidade em hipótese alguma. Utilizamos
                      materiais de primeira linha e acabamentos impecáveis.
                    </p>
                  </div>
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="flex items-center lg:items-start gap-4">
                  <FaRegHandshake className="text-[#BE1E21] text-8xl lg:text-5xl" />
                  <div>
                    <h3 className="text-lg font-bold">Transparência Total:</h3>
                    <p>
                      Sem surpresas desagradáveis ou taxas ocultas. Você sabe
                      exatamente pelo que está pagando.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row mx-5 pt-20">
            <div className="flex flex-col justify-center pr-[3%]">
              <div className="space-y-4 mt-5">
                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-3xl lg:text-xl font-bold">PAGAMENTO FACILITADO!</h3>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >Aqui você tem condições <span className="text-[#BE1E21]"> especiais</span> para pagamento, facilitamos em
                  <span className="text-[#BE1E21]"> até 12 vezes no cartão</span>. Mais tranquilidade e confiança para realizar o projeto dos seus sonhos.
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-[#BE1E21] text-sm"><span className="font-bold">OPCIONAL</span><br />Para clientes que optarem por pagamento via cartão de crédito, poderão incidir taxas de juros conforme as condições da administradora.</p>
              </div>
              <div className="flex items-center mt-8">
                <FaBox className="text-[#BE1E21] text-6xl" />
                <div className="flex flex-col pl-5">
                  <h3
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="text-xl font-bold mt-4">EXCELENTE PRAZO DE ENTREGA!</h3>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="mt-2">
                    Receba seus móveis em até <br />
                    <span className="text-[#BE1E21] text-3xl font-bold">35 DIAS</span>
                  </p>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="text-sm mt-1">DIAS ÚTEIS</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="relative w-full h-[350px] md:h-[600px]">
              <Image
                src="/entrega.jpg"
                alt="Logo ta moveis planejados"
                fill
                className="relative rounded-3xl z-420"
              />
              <div className="absolute -top-5 left-[3%] w-full h-full md:left-[2%] md:-top-5 lg:-top-5 lg:left-[-2%] bg-[#0E2843] rounded-3xl"></div>
            </div>
          </div>

          <div className="flex flex-col pt-20 mx-5 lg:flex-row justify-center">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="relative w-full h-[350px] lg:ml-5 md:h-[600px]">
              <Image
                src="/maquinario.jpg"
                alt="Logo ta moveis planejados"
                fill
                className="relative rounded-3xl z-420"
              />
              <div className="absolute -top-4 left-[-3%] w-full h-full md:left-[-2%] md:-top-5 lg:-top-5 lg:left-[-2%] bg-[#0E2843] rounded-3xl"></div>
            </div>

            <div className="flex justify-center items-center lg:w-[50%] lg:pl-[4%] lg:pr-[9%]">
              <div className="flex flex-col space-y-7">
                <div className="flex items-center gap-4 mt-5">
                  <FaCogs className="text-[#BE1E21] text-5xl" />
                  <h2
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className="text-3xl font-bold">CONHEÇA NOSSA INFRAESTRUTURA</h2>
                </div>
                <h3
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="text-xl text-[#BE1E21] font-bold">VEJA COMO NOSSA TÉCNICA FAZ A DIFERENÇA!</h3>
                <p
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  Temos uma infraestrutura moderna e maquinários de última
                  geração, <span className="text-[#BE1E21] font-bold">com 10 anos de experiência e</span>
                  <span className="text-[#BE1E21] font-bold"> equipados com tecnologia de ponta</span>, garantimos
                  precisão e acabamento superior na fabricação de móveis sob medida,
                  <span className="text-[#BE1E21] font-bold"> monitorando cada etapa do processo para entregar seu projeto exatamente como imaginado.</span>
                </p>
              </div>
            </div>
          </div>

        </section>

        <section className="relative flex flex-col justify-center items-center w-full py-30 bg-[url('/background-planejados.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative text-center px-5">
            <div className="flex justify-center mt-6">
              <FaStar className="text-yellow-500 text-4xl lg:text-7xl mx-1" />
              <FaStar className="text-yellow-500 text-5xl lg:text-8xl mx-1" />
              <FaStar className="text-yellow-500 text-6xl lg:text-9xl mx-1" />
              <FaStar className="text-yellow-500 text-5xl lg:text-8xl mx-1" />
              <FaStar className="text-yellow-500 text-4xl lg:text-7xl mx-1" />
            </div>
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-3xl font-bold text-[#FFFFFF] mt-8">AVALIAÇÕES</h3>
            <p
              data-aos="fade-down"
              data-aos-duration="2000"
              className="mt-4 text-lg text-[#FFFFFF]">
              Veja o que nossos clientes dizem e descubra como entregamos
              <span className="text-[#BE1E21] font-bold"> qualidade e satisfação.</span>
            </p>
          </div>

          <div className="w-[80%] max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 px-3 z-10">

            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="flex flex-col justify-start w-full lg:w-100 bg-[#FFFFFF] p-5 rounded-lg border-2 border-dashed border-[#BE1E21]">
              <h2 className="font-semibold">Ana Julia</h2>
              <p className="text-[#969A92] text-sm">1 Comentário - 3 fotos</p>
              <div className="flex justify-start py-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 text-sm mr-1" />
                ))}
              </div>
              <p className="text-xs">Ficou melhor do que eu imaginava.</p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="lg:w-100 bg-[#FFFFFF] p-5 rounded-lg border-2 border-dashed border-[#BE1E21]">
              <h2 className="font-semibold">João Pedro</h2>
              <p className="text-[#969A92] text-sm">2 Comentários - 5 fotos</p>
              <div className="flex justify-start py-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 text-sm mr-1" />
                ))}
              </div>
              <p className="text-xs">Excelente serviço, superou minhas expectativas!</p>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="lg:w-100 bg-[#FFFFFF] p-5 rounded-lg border-2 border-dashed border-[#BE1E21]">
              <h2 className="font-semibold">Mariana Silva</h2>
              <p className="text-[#969A92] text-sm">4 Comentários - 3 fotos</p>
              <div className="flex justify-start py-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 text-sm mr-1" />
                ))}
              </div>
              <p className="text-xs">Muito satisfeita com o resultado final!</p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="lg:w-100 bg-[#FFFFFF] p-5 rounded-lg border-2 border-dashed border-[#BE1E21]">
              <h2 className="font-semibold">Carlos Eduardo</h2>
              <p className="text-[#969A92] text-sm">1 Comentário - 2 fotos</p>
              <div className="flex justify-start py-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 text-sm mr-1" />
                ))}
              </div>
              <p className="text-xs">Impecável, recomendo a todos!</p>
            </div>

          </div>
        </section>

        <div>
          <div className="bg-[#BE1E21] text-white py-8 text-center">
            <h2
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-2xl text-3xl font-medium">VOCÊ MERECE UM LAR INCRÍVEL, <br /><span className="font-extrabold">SEM ABRIR MÃO DO PREÇO JUSTO.</span></h2>
            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              className="text-sm text-xl mt-4">Junte-se aos milhares de clientes satisfeitos que já fizeram essa escolha inteligente <br /> e transformaram seus lares sem estourar o orçamento.</p>
          </div>
        </div>

        <section className="pt-30">
          <div className="text-center">
            <h2
              data-aos="fade-down"
              data-aos-duration="2000"
              className="text-2xl text-3xl font-medium uppercase mb-10">Transforme sua ideia em realidade <br /><span className="font-extrabold text-[#BE1E21]">Agende sua visita agora!</span></h2>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="lg:mx-[30%] mb-10">Garanta sua visita e dê o primeiro passo para o ambiente dos seus sonhos. Nossos especialistas estão prontos para tirar seu projeto do papel. Agende agora mesmo!</p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="flex flex-col items-center text-center">
            <div className="flex justify-center px-3">
              <div
                data-aos="flip-up"
                data-aos-duration="2000"
                className="rounded-3xl border-4 border-solid border-[#0E2843] overflow-hidden w-90 md:w-190 lg:w-250 h-100"
                style={{ background: "#e5e7eb" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.502066502674!2d-46.50017862467015!3d-23.548024278809077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce674805f1e0d9%3A0x18205e42b65a9255!2sR.%20Dr.%20Xavier%20de%20Oliveira%2C%2045%20-%20Vila%20Nhocun%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003560-050!5e0!3m2!1spt-BR!2sbr!4v1748458177153!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
            <p className="text-lg mt-3 mx-1"><span className="text-[#BE1E21] font-bold">Endereço:</span> Rua. Xavier de Oliveira 45, Zona Leste | São Paulo - SP</p>
          </div>
          <div className=" py-10 px-5">
            <div className="flex flex-col mx-5 lg:flex-wrap justify-center items-center lg:max-w-6xl mx-auto">
              <div>
                <h2
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-3xl font-bold">Fale conosco:</h2>
                <div

                  className="flex items-center mb-4">
                  <div className="bg-[#BE1E21] text-[#FFFFFF] p-3 rounded-full mr-4">
                    <FaMapMarkerAlt size={25} />
                  </div>
                  <p className="text-[#FFFFFF] bg-[#BE1E21] p-2 rounded-lg">Rua. Xavier de Oliveira 45, Zona Leste | São Paulo - SP</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-[#BE1E21] text-[#FFFFFF] p-3 rounded-full mr-4">
                    <FaPhoneAlt size={25} />
                  </div>
                  <p className="text-[#FFFFFF] bg-[#BE1E21] p-2 rounded-lg">(11) 95113-7030</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-[#BE1E21] text-[#FFFFFF] p-3 rounded-full mr-4">
                    <FaPhoneAlt size={25} />
                  </div>
                  <p className="text-[#FFFFFF] bg-[#BE1E21] p-2 rounded-lg">(11) 94229-5865</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-[#BE1E21] text-[#FFFFFF] p-3 rounded-full mr-4">
                    <FaEnvelope size={25} />
                  </div>
                  <p className="text-[#FFFFFF] bg-[#BE1E21] p-2 rounded-lg">taplanejados@gmail.com</p>
                </div>
              </div>
              <div className="mt-10">
                <h2
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-3xl font-bold mb-6">Agende Seu Horário:</h2>
                <div className="bg-[#BE1E21] text-white p-6 lg:w-90 rounded-lg">
                  <p className="bg-white text-[#BE1E21] inline-block px-4 py-1 rounded-full font-semibold mb-4">Horário de funcionamento: </p>
                  <p><strong>Segunda a Sexta-feira:</strong> 9:00h às 18:00</p>
                  <p><strong>Sábado:</strong> 9:30h até 12:00h</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <p className="text-lg font-extrabold mb-4">@ta.planejados</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.instagram.com/ta.planejados/"
                  className="bg-[#BE1E21] text-white p-3 rounded-full"
                  aria-label="Instagram"
                >
                  <FaInstagram size={25} />
                </a>
                <a
                  href="#"
                  className="bg-[#BE1E21] text-white p-3 rounded-full"
                  aria-label="Facebook"
                >
                  <FaFacebook size={25} />
                </a>
                <a
                  href="#"
                  className="bg-[#BE1E21] text-white p-3 rounded-full"
                  aria-label="YouTube"
                >
                  <FaYoutube size={25} />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col flex-wrap items-center justify-center text-[#FFFFFF] row-start-3 bg-[#0E2843] py-20">
        <Image
          src="/ta-planejados.png"
          alt="Logo Ta Planejados"
          width={300}
          height={300}
          className="mb-5"
        />
        <p className="font-bold">Todos os direitos reservados.</p>
        <div>
          <a
            href="https://wa.me/5511915181487?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20servi%C3%A7o."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center">
              <p className="mt-1.5 mr-1">Desenvolvido por:</p>
              <Image
                src="/logo.png"
                alt="logo jveiga"
                width={100}
                height={100}
                className="mb-5"
              />
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}
