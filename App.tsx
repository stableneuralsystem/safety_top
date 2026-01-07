import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  FileText, 
  Phone, 
  CheckCircle2, 
  Award, 
  Clock, 
  ChevronRight,
  Mail,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Button } from './components/Button';

// --- Sub-components for Sections ---

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 md:mb-16 text-center">
    {subtitle && (
      <span className="inline-block py-1 px-3 rounded-full bg-brand-500/10 text-brand-400 text-sm font-semibold mb-4 border border-brand-500/20">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
      {children}
    </h2>
    <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-transparent mx-auto mt-6 rounded-full"></div>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-dark-900 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-brand-500/30 hover:bg-dark-800 transition-all duration-300 group ${className}`}>
    {children}
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-dark-950 text-gray-300 font-sans selection:bg-brand-500 selection:text-white">
      
      <Header onOpenModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0 bg-dark-950">
             <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow"></div>
             <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
             <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
             
             {/* Grid Pattern */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-300 text-sm mb-8 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Набор групп на текущий месяц открыт
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-slide-up">
              Обучение промышленной <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
                безопасности
              </span> будущего
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Сертифицированные курсы для специалистов и руководителей. 
              Получите официальные документы и знания, соответствующие последним стандартам 2024 года.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button onClick={openModal} className="shadow-brand-500/50">
                Начать обучение
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
                Посмотреть программы
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/5 pt-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              {[
                { val: "10+", label: "Лет опыта" },
                { val: "5000+", label: "Выпускников" },
                { val: "100%", label: "Лицензия" },
                { val: "24/7", label: "Поддержка" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-white">{stat.val}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT COMPANY */}
        <section id="about" className="py-24 bg-dark-900/50 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-full"></div>
                <div className="relative bg-dark-800 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center overflow-hidden">
                   {/* Abstract graphic representing company structure */}
                   <div className="grid grid-cols-2 gap-4 w-full h-full opacity-80">
                      <div className="bg-white/5 rounded-lg h-full w-full"></div>
                      <div className="space-y-4">
                        <div className="bg-brand-500/20 rounded-lg h-1/2 w-full"></div>
                        <div className="bg-white/5 rounded-lg h-1/3 w-full"></div>
                      </div>
                   </div>
                </div>
              </div>
              <div>
                <span className="text-brand-400 font-semibold mb-2 block">О нас</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ведущий центр профессиональной подготовки</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  SafetyPro Academy — это современный образовательный центр, специализирующийся на повышении квалификации в сфере охраны труда и промышленной безопасности. Мы объединяем передовые цифровые технологии и экспертизу лучших преподавателей отрасли.
                </p>
                <ul className="space-y-4">
                  {[
                    "Государственная лицензия на образовательную деятельность",
                    "Собственная платформа дистанционного обучения (LMS)",
                    "Преподаватели-практики с опытом более 15 лет"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-brand-500 shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANCE */}
        <section id="importance" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle subtitle="Актуальность">Почему это важно</SectionTitle>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck size={40} className="text-brand-400" />,
                  title: "Соблюдение законов",
                  desc: "Избегайте штрафов до 200 000 руб. за нарушение требований охраны труда (ст. 5.27.1 КоАП РФ)."
                },
                {
                  icon: <Users size={40} className="text-purple-400" />,
                  title: "Безопасность людей",
                  desc: "Минимизируйте риски несчастных случаев на производстве благодаря квалифицированному персоналу."
                },
                {
                  icon: <Award size={40} className="text-blue-400" />,
                  title: "Репутация бизнеса",
                  desc: "Наличие сертификатов повышает доверие партнеров и открывает доступ к тендерам."
                }
              ].map((item, idx) => (
                <Card key={idx} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section id="courses" className="py-24 bg-dark-800/30">
          <div className="container mx-auto px-4">
            <SectionTitle subtitle="Программы">Наши курсы</SectionTitle>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Охрана труда для руководителей",
                  hours: "40 часов",
                  price: "от 2 500 ₽",
                  tags: ["Топ", "Дистанционно"]
                },
                {
                  title: "Пожарная безопасность (ПТМ)",
                  hours: "16-72 часа",
                  price: "от 1 800 ₽",
                  tags: ["МЧС требования"]
                },
                {
                  title: "Работы на высоте",
                  hours: "24 часа",
                  price: "от 3 000 ₽",
                  tags: ["1, 2, 3 группы"]
                },
                {
                  title: "Электробезопасность",
                  hours: "72 часа",
                  price: "от 4 500 ₽",
                  tags: ["II-V группы"]
                },
                {
                  title: "Оказание первой помощи",
                  hours: "16 часов",
                  price: "от 1 500 ₽",
                  tags: ["Практика"]
                },
                {
                  title: "ГО и ЧС",
                  hours: "36 часов",
                  price: "от 2 000 ₽",
                  tags: ["Обязательно"]
                }
              ].map((course, idx) => (
                <Card key={idx} className="flex flex-col h-full">
                  <div className="flex gap-2 mb-4">
                    {course.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-semibold px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 flex-grow">{course.title}</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                    <div className="flex items-center gap-1">
                      <Clock size={16} /> {course.hours}
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-2xl font-bold text-white">{course.price}</span>
                    <button 
                      onClick={openModal}
                      className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white hover:bg-brand-500 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-24">
          <div className="container mx-auto px-4">
            <SectionTitle subtitle="Процесс">Как проходит обучение</SectionTitle>
            
            <div className="relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent -translate-y-1/2 z-0"></div>
              
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: "01", title: "Заявка", desc: "Оставляете заявку на сайте или звоните нам." },
                  { step: "02", title: "Договор", desc: "Заключаем договор и выставляем счет." },
                  { step: "03", title: "Обучение", desc: "Изучаете материалы в личном кабинете." },
                  { step: "04", title: "Документ", desc: "Получаете удостоверение установленного образца." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-dark-950 border border-white/10 p-6 rounded-2xl text-center relative group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-brand-900/50 text-brand-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DOCUMENTS */}
        <section id="documents" className="py-24 bg-dark-800/30">
          <div className="container mx-auto px-4">
            <SectionTitle subtitle="Легитимность">Документы</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="prose prose-invert">
                <h3 className="text-2xl font-bold text-white mb-4">Образцы выдаваемых документов</h3>
                <p className="text-gray-400 mb-6">
                  Все выдаваемые нами удостоверения и протоколы вносятся в реестр ФИС ФРДО. Вы получаете полностью легитимные документы, которые пройдут любую проверку трудовой инспекции.
                </p>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2 text-brand-400">
                      <FileText size={20} />
                      <span>Лицензия №12345</span>
                   </div>
                   <div className="flex items-center gap-2 text-brand-400">
                      <BookOpen size={20} />
                      <span>Аккредитация Минтруда</span>
                   </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-[3/4] bg-white/5 border border-white/10 rounded-lg p-2 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300 cursor-pointer">
                    <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-xs text-gray-500">
                      Удостоверение
                    </div>
                 </div>
                 <div className="aspect-[3/4] bg-white/5 border border-white/10 rounded-lg p-2 transform rotate-[2deg] hover:rotate-0 transition-transform duration-300 cursor-pointer translate-y-8">
                    <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-xs text-gray-500">
                      Протокол
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTS / FINAL CTA */}
        <section id="contacts" className="py-24 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/20 rounded-full blur-[100px] -z-10"></div>
          
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Готовы повысить уровень безопасности?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Оставьте заявку прямо сейчас, и наш специалист подберет оптимальную программу обучения для вашей компании.
            </p>
            
            <div className="bg-dark-900/80 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8 mb-10 text-left">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-500/10 p-3 rounded-lg text-brand-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Телефон</div>
                    <div className="text-white font-medium">+7 (999) 000-00-00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-500/10 p-3 rounded-lg text-brand-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-medium">info@safetypro.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-500/10 p-3 rounded-lg text-brand-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Офис</div>
                    <div className="text-white font-medium">Москва, Сити, Башня Федерация</div>
                  </div>
                </div>
              </div>

              <Button onClick={openModal} fullWidth className="text-lg py-4">
                Оставить заявку на обучение
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                <GraduationCap size={18} />
              </div>
              <span className="text-lg font-bold text-white">SafetyPro</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SafetyPro Academy. Все права защищены.
            </div>

            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-white/10 cursor-pointer transition-colors"></div>
               <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-white/10 cursor-pointer transition-colors"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;