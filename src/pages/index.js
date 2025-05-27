import Image from "next/image";
import { FaWhatsapp, FaLightbulb, FaCouch, FaDollarSign, FaIndustry, FaRegHandshake, FaBox, FaCogs, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { MdOutlineCheckCircle, MdOutlineHighQuality } from "react-icons/md";
import { useEffect } from "react";
import Aos from "aos";

export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <main>
        <section className="relative flex-col justify-center items-center w-full h-[88vh] lg:h-[100vh] bg-[url('/background.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
          <div className="absolute top-5 h-16 lg:top-20 w-[80%] lg:w-[60%] bg-[#0E2843] z-10">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="flex justify-end items-center h-full">
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-[#FFFFFF] text-lg lg:text-3xl font-extrabold pr-8">MÓVEIS SOB MEDIDA</p>
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

            <div className="flex flex-col lg:absolute lg:right-17 lg:right-50 lg:w-[34%]">
              <div className="w-full">
                <h1
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.86)" }}
                  className="text-5xl lg:text-7xl font-black text-[#FFFFFF]">
                  Móveis Planejados
                </h1>
                <h2
                  style={{
                    fontFamily: '"Raleway", sans-serif',
                    textShadow: "4px 4px 6px rgba(251, 2, 2, 0.86)",
                  }}
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="text-5xl lg:text-8xl font-extrabold text-[#FFFFFF]">
                  <span className="sm:text-sm lg:text-lg">com até</span> 60% OFF
                </h2>
              </div>

              <div className="flex justify-center mt-5 lg:mt-15">
                <button
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="flex px-10 lg:px-20 lg:px-45 py-5 text-lg text-[#FFFFFF] font-semibold bg-[#128C7E] hover:bg-[#0e705f] transition cursor-pointer">
                  Solicitar Orçamento
                  <FaWhatsapp className="pl-1" size={32} color="#25D366" />
                </button>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="flex justify-center mt-9">
                <Image
                  src="/ta-planejados.png"
                  alt="Logo Ta Planejados"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>


        <section className="w-full">
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
                className="pt-20 lg:w-[40%] lg:ml-20">
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
          <div className="flex flex-col items-center pt-20 px-[5%] lg:px-[30%]">
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
              className="relative flex flex-col lg:gap-4 lg:mr-4 lg:mb-4">
              <Image
                src="/sala.jpeg"
                alt="Imagem moveis planejados"
                width={500}
                height={500}
                className=" rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-4 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Painel Planejado</h3>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="relative">
              <Image
                src="/guarda-roupa-bege.jpeg"
                alt="Imagem moveis planejados"
                width={500}
                height={500}
                className="rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-8 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Guarda Roupa Planejado</h3>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="relative flex flex-col lg:gap-4 lg:ml-4">
              <Image
                src="/cozinha-verde.jpeg"
                alt="Imagem moveis planejados"
                width={500}
                height={500}
                className="rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-8 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Armario Planejados</h3>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="relative">
              <Image
                src="/guarda-roupa-aberto.jpeg"
                alt="Imagem moveis planejados"
                width={500}
                height={500}
                className="rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-4 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Guarda Roupa Casal Planejado</h3>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="relative flex flex-col lg:gap-4 lg:mr-4 lg:ml-4">
              <Image
                src="/guarda-roupa-marrom.jpeg"
                alt="Imagem moveis planejados"
                width={500}
                height={500}
                className="rounded-3xl border-4 border-solid border-[#BE1E21]"
              />
              <h3 className="absolute bottom-4 whitespace-nowrap left-[50%] transform -translate-x-[50%] text-white bg-[#0E2843] bg-opacity-50 px-4 py-2 rounded-lg">Guarda Roupa Casal Planejado</h3>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="relative">
              <Image
                src="/cozinha-musgo.jpeg"
                alt="Imagem moveis planejados"
                width={500}
                height={500}
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
            className="text-center flex lg:justify-center">
            <h2 className="text-3xl font-bold mb-20">UMA <span className="text-[#BE1E21]">NOVA EXPERIÊNCIA</span> EM PLANEJADO</h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-center mx-5">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="relative">
              <Image
                src="/processo.jpg"
                alt="Imagem do processo TA Planejados"
                width={900}
                height={900}
                className="relative rounded-3xl z-420"
              />
              <div className="absolute -top-3 left-[-3%] w-full h-full lg:top-7 lg:left-[-2%] lg:w-210 lg:h-140 bg-[#0E2843] rounded-3xl"></div>
            </div>
            <div className="flex flex-col gap-8 mt-5 lg:p-8 lg:w-[40%]">
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
            <div className="flex-col lg:w-[50%] py-[5%] pl-[7%] pr-[3%]">
              <div className="space-y-4">
                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-3xl lg:text-xl font-bold">PAGAMENTO FACILITADO!</h3>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >Aqui você tem condições <span className="text-[#BE1E21]"> especiais</span> para pagamento, facilitamos em
                  <span className="text-[#BE1E21]"> até 36 vezes no boleto</span>. Mais tranquilidade e confiança para realizar o projeto dos seus sonhos.
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-[#BE1E21] text-sm"><span className="font-bold">OPCIONAL</span><br />para clientes que optarem por pagamento via boleto sujeito a análise de crédito.</p>
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
              className="relative">
              <Image
                src="/entrega.jpg"
                alt="Logo ta moveis planejados"
                width={800}
                height={800}
                className="relative rounded-3xl z-420"
              />
              <div className="absolute -top-3 left-2 w-full h-full lg:top-[-5%] lg:left-[4%] lg:w-185 lg:h-125 bg-[#0E2843] rounded-3xl"></div>
            </div>
          </div>

          <div className="flex flex-col pt-20 mx-5 lg:flex-row justify-center">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="relative">
              <Image
                src="/maquinario.jpg"
                alt="Logo ta moveis planejados"
                width={900}
                height={900}
                className="relative z-420 rounded-3xl lg:ml-[13%] lg:w-[90%]"
              />
              <div className="absolute -top-3 left-[-2.5%] w-full h-full lg:top-[-4%] lg:left-[11%] lg:w-200 lg:h-110 bg-[#0E2843] rounded-3xl"></div>
            </div>

            <div className="flex justify-center mt-10 lg:w-[50%] lg:pl-[4%] lg:pr-[9%]">
              <div className="flex flex-col space-y-7">
                <div className="lg:flex items-center gap-4">
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
              <Image
                src="/maps.png"
                alt="Mapa Google Maps"
                width={800}
                height={800}
                data-aos="flip-up"
                data-aos-duration="2000"
                className="rounded-3xl border-4 border-solid border-[#0E2843]"
              />
            </div>
            <p className="text-lg text-[#BE1E21] font-bold pt-3">Perto da estação Arthur Alvim</p>
            <p className="text-lg"><span className="text-[#BE1E21] font-bold">Endereço:</span> Rua. Serra de Guaibu 178, Zona Leste | São Paulo - SP</p>
          </div>
          <div className=" py-10 px-5">
            <div className="flex flex-col mx-5 lg:flex-wrap justify-center items-center lg:max-w-6xl mx-auto lg:gap-40">
              <div>
                <h2
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-3xl font-bold mb-6">Fale conosco:</h2>
                <div

                  className="flex items-center mb-4">
                  <div className="bg-[#BE1E21] text-[#FFFFFF] p-3 rounded-full mr-4">
                    <FaMapMarkerAlt size={25} />
                  </div>
                  <p className="text-[#FFFFFF] bg-[#BE1E21] p-2 rounded-lg">Rua. Serra de Guaibu 178, Zona Leste | São Paulo - SP</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-[#BE1E21] text-[#FFFFFF] p-3 rounded-full mr-4">
                    <FaPhoneAlt size={25} />
                  </div>
                  <p className="text-[#FFFFFF] bg-[#BE1E21] p-2 rounded-lg">(11) 93243-4739</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-[#BE1E21] text-[#FFFFFF] p-3 rounded-full mr-4">
                    <FaEnvelope size={25} />
                  </div>
                  <p className="text-[#FFFFFF] bg-[#BE1E21] p-2 rounded-lg">contato@ta.planejados.com</p>
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
                  href="#"
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
        <p className="text-sm font-bold">CNPJ 00.000.000/0001-00</p>
      </footer>
    </div>
  );
}
