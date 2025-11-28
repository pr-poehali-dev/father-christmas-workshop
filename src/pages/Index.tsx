import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'works', 'gallery', 'participants', 'achievements'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О проекте', icon: 'Info' },
    { id: 'works', label: 'Наши работы', icon: 'Palette' },
    { id: 'gallery', label: 'Фотогалерея', icon: 'Camera' },
    { id: 'participants', label: 'Участники', icon: 'Users' },
    { id: 'achievements', label: 'Достижения', icon: 'Award' },
  ];

  const works = [
    { title: 'Снежинки из бумаги', description: 'Красивые ажурные снежинки', image: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/28c5c05e-8ffa-438f-aa2a-c9f604e0b7c3.jpg' },
    { title: 'Ёлочные игрушки', description: 'Расписные шары и фигурки', image: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/2955516a-83fe-4295-83b3-dfd21a7b5376.jpg' },
    { title: 'Новогодние открытки', description: 'Открытки для родителей', image: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/b0fefa83-dc6c-4e48-a331-324baec24009.jpg' },
    { title: 'Гирлянды', description: 'Яркие украшения для группы', image: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/b6560d58-2194-4d2a-ab47-d38baa133dc0.jpg' },
    { title: 'Дед Мороз и Снегурочка', description: 'Фигурки из различных материалов', image: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/48e11261-2636-4a65-854b-085555e8ca61.jpg' },
    { title: 'Зимние пейзажи', description: 'Рисунки и аппликации', image: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/b62bd67f-99be-4cd9-97db-eadb47eba4d8.jpg' },
    { title: 'Ангелочки', description: 'Рождественские ангелы из бумаги', image: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/c685b674-d41d-4039-8368-939d52b059a5.jpg' },
    { title: 'Новогодние носочки', description: 'Яркие носки для подарков', image: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/72cedceb-7953-4c4b-95b8-87aba941a1bb.jpg' },
    { title: 'Ёлочки из бумаги', description: 'Объёмные новогодние ёлки', image: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/0898ed06-9f8b-46c0-afa8-1c36a3aaea92.jpg' },
  ];

  const participants = [
    { name: 'Группа "Солнышко"', count: 24, role: 'Старшая группа' },
  ];

  const achievements = [
    { icon: 'Sparkles', title: 'Более 100 поделок', description: 'Создано руками детей' },
    { icon: 'Heart', title: 'Творческое развитие', description: 'Развитие мелкой моторики и фантазии' },
    { icon: 'Users', title: 'Командная работа', description: 'Дети научились работать вместе' },
    { icon: 'Trophy', title: 'Праздничная атмосфера', description: 'Украсили группу к Новому году' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-200 text-2xl animate-snowfall opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="text-4xl animate-float">🎅</div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Мастерская Деда Мороза</h1>
                <p className="text-sm text-muted-foreground">Старшая группа "Солнышко"</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>
          <div id="mobile-menu" className="hidden md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center justify-start space-x-2"
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-20 relative z-10">
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 magic-gradient opacity-20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <Badge className="text-lg px-4 py-2 bg-secondary">✨ Новогодний проект 2024</Badge>
                <h1 className="text-6xl md:text-7xl font-bold text-primary leading-tight">
                  Мастерская<br />Деда Мороза
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Волшебный проект старшей группы "Солнышко", где дети своими руками создают 
                  новогоднее чудо и готовятся к самому любимому празднику!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection('works')} className="text-lg px-8">
                    <Icon name="Palette" size={20} className="mr-2" />
                    Посмотреть работы
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-lg px-8">
                    <Icon name="Info" size={20} className="mr-2" />
                    О проекте
                  </Button>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/57479ec7-d117-4f50-ba59-0f9c6ef55a45.jpg"
                  alt="Мастерская Деда Мороза"
                  className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-slide-up">
              <div className="text-center mb-12">
                <Badge className="text-lg px-4 py-2 mb-4">📖 О проекте</Badge>
                <h2 className="text-5xl font-bold text-primary mb-6">Волшебство своими руками</h2>
                <p className="text-xl text-muted-foreground">
                  Наш проект помогает детям погрузиться в атмосферу новогоднего волшебства
                </p>
              </div>
              <Card className="border-4 border-primary/20 shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">🎨</div>
                        <div>
                          <h3 className="font-semibold text-lg text-primary">Творческое развитие</h3>
                          <p className="text-muted-foreground">Развиваем фантазию и творческие способности через создание новогодних украшений</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">🤝</div>
                        <div>
                          <h3 className="font-semibold text-lg text-primary">Командная работа</h3>
                          <p className="text-muted-foreground">Учимся работать в команде и помогать друг другу</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">✂️</div>
                        <div>
                          <h3 className="font-semibold text-lg text-primary">Мелкая моторика</h3>
                          <p className="text-muted-foreground">Развиваем точность движений через работу с различными материалами</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">🎄</div>
                        <div>
                          <h3 className="font-semibold text-lg text-primary">Праздничная атмосфера</h3>
                          <p className="text-muted-foreground">Создаём уют и волшебство к Новому году</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="works" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <Badge className="text-lg px-4 py-2 mb-4">🎨 Наши работы</Badge>
              <h2 className="text-5xl font-bold text-primary mb-6">Поделки и творчество</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Каждая работа создана с любовью и старанием наших маленьких мастеров
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {works.map((work, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 overflow-hidden"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{work.title}</h3>
                    <p className="text-muted-foreground">{work.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <Badge className="text-lg px-4 py-2 mb-4">📸 Фотогалерея</Badge>
              <h2 className="text-5xl font-bold text-primary mb-6">Процесс и результаты</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Запечатлённые моменты творчества и радости
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { img: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/9325016f-e51e-4664-8381-3fb5e6f0596a.jpg', title: 'Творческий процесс' },
                { img: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/b312ce00-3c0e-4987-b511-3ec611e307b9.jpg', title: 'Роспись игрушек' },
                { img: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/19a99b9b-abd4-462a-99b5-a21f9e373e7e.jpg', title: 'Вырезаем снежинки' },
                { img: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/da44ed10-059f-4ddb-a9a6-c335c31298a5.jpg', title: 'Родители помогают' },
                { img: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/51e2d566-99c9-4696-b66b-5936b5955b64.jpg', title: 'Семейное творчество' },
                { img: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/9b022463-3581-42cb-a471-5c359c0cbd31.jpg', title: 'Мама и ребёнок' },
                { img: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/0b2fa9f9-faf8-471a-8c2f-ccf412671be4.jpg', title: 'Наша группа' },
                { img: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/39a94192-90de-4b87-9718-8897d93d01ad.jpg', title: 'Дружная команда' },
                { img: 'https://cdn.poehali.dev/projects/47926e46-bfe9-4d61-b25d-3853d5f0e860/files/57479ec7-d117-4f50-ba59-0f9c6ef55a45.jpg', title: 'Мастерская в работе' },
              ].map((photo, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-secondary/20">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={photo.img}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-white text-xl font-bold">{photo.title}</h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="participants" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-slide-up">
              <div className="text-center mb-12">
                <Badge className="text-lg px-4 py-2 mb-4">👨‍👩‍👧‍👦 Участники</Badge>
                <h2 className="text-5xl font-bold text-primary mb-6">Наша команда мастеров</h2>
                <p className="text-xl text-muted-foreground">
                  Дружная команда старшей группы
                </p>
              </div>
              {participants.map((group, index) => (
                <Card key={index} className="border-4 border-secondary/20 shadow-xl">
                  <CardContent className="p-10 text-center space-y-6">
                    <div className="text-6xl">👧👦</div>
                    <h3 className="text-4xl font-bold text-primary">{group.name}</h3>
                    <div className="flex items-center justify-center space-x-8">
                      <div>
                        <div className="text-5xl font-bold text-secondary">{group.count}</div>
                        <div className="text-muted-foreground text-lg">участников</div>
                      </div>
                      <div className="h-16 w-px bg-border"></div>
                      <div>
                        <div className="text-2xl font-semibold text-primary">{group.role}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      Каждый ребёнок внёс свой вклад в создание новогоднего чуда, проявив творчество и старание
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <Badge className="text-lg px-4 py-2 mb-4">🏆 Достижения</Badge>
              <h2 className="text-5xl font-bold text-primary mb-6">Результаты проекта</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Чего мы достигли благодаря нашей дружной работе
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20 group"
                >
                  <CardContent className="space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white group-hover:scale-110 transition-transform duration-300">
                      <Icon name={achievement.icon as any} size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-5xl animate-float">🎅</div>
                <h3 className="text-3xl font-bold">Мастерская Деда Мороза</h3>
              </div>
              <p className="text-xl opacity-90">Старшая группа "Солнышко" • 2024</p>
              <div className="flex items-center justify-center space-x-2 text-lg">
                <Icon name="Heart" size={24} className="text-red-300" />
                <span>Сделано с любовью и волшебством</span>
                <Icon name="Sparkles" size={24} className="text-yellow-300" />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;