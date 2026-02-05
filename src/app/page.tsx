'use client';

import Image from "next/image";
import {useState, useRef, useEffect} from "react";

// Вспомогательный компонент для элементов FAQ
function FaqItem({question, answer}: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#E5E5E5] py-2">
            <div
                className="relative flex justify-center items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="font-roboto font-normal text-[12px] px-8 text-center leading-tight text-black">
                    {question}
                </h2>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4">
                    <Image
                        src={isOpen ? "/faq/minus.svg" : "/faq/plus.svg"}
                        alt={isOpen ? "minus" : "plus"}
                        width={16}
                        height={16}
                    />
                </div>
            </div>

            {isOpen && (
                <div className="mt-4 px-2 animate-fadeIn">
                    <p className="font-normal font-roboto text-[12px] text-center leading-5 text-[#00000099]">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
}

export default function Home() {
    const slides = [
        {id: 1, img: '/img/flower.jpg'},
        {id: 2, img: '/img/flower.jpg'},
        {id: 3, img: '/img/flower.jpg'},
        {id: 4, img: '/img/flower.jpg'},
    ];

    const displaySlides = [
        slides[slides.length - 1],
        ...slides,
        slides[0],
    ];

    const [currentIndex, setCurrentIndex] = useState(1);
    const sliderRef = useRef<HTMLDivElement>(null);
    const isTransitioning = useRef(false);

    const links = [
        {id: 1, title: 'Flower', icon: '/link/flower.svg'},
        {id: 2, title: 'Bouquets', icon: '/link/bouquets.svg'},
        {id: 3, title: 'Plants', icon: '/link/plants.svg'},
    ];

    const news = [
        {id: 1, title: 'Mixed Bouquets 1', icon: '/news/bq1.svg', price: 45, isPopular: true},
        {id: 2, title: 'Mixed Bouquets 1', icon: '/news/bq1.svg', price: 50, isPopular: false},
        {id: 3, title: 'Mixed Bouquets 1', icon: '/news/bq1.svg', price: 65, isPopular: true},
        {id: 4, title: 'Mixed Bouquets 1', icon: '/news/bq1.svg', price: 25, isPopular: false},
    ];

    const occasions = [
        {id: 1, title: 'Birthday', icon: '/occasion/birthday.svg'},
        {id: 2, title: 'Anniversary', icon: '/occasion/anniversary.svg'},
        {id: 3, title: 'Sympathy', icon: '/occasion/sympathy.svg'},
        {id: 4, title: 'Weddings', icon: '/occasion/weddings.svg'},
    ];

    const customers = [
        {id: 1, name: 'Roman', message: 'The saleswoman Christina provides terrible service!', stars: 1},
        {id: 2, name: 'Aleksandr', message: 'Kristina has a great 🍑 and a flower shop', stars: 5},
        {id: 3, name: 'Dima', message: 'The delivery was prompt and the flowers were fresh!', stars: 5},
    ];

    const faqData = [
        {
            question: "What time is delivery?",
            answer: "We deliver your orders in New York City 24/7 Deliverables are available 24/7 by prior arrangement. We'll schedule a convenient delivery window when you place your order. We also offer delivery at a specific time, please contact your personal manager for details. Overnight delivery is also available when you place your order at least 6 hours in advance."
        },
        {
            question: "How to care for a bouquet?",
            answer: "Keep the flowers in a cool place, away from direct sunlight and drafts. Trim the stems at an angle every 2 days and change the water to keep them fresh."
        },
        {
            question: "How much time in advance should I place my order?",
            answer: "It is best to place your order at least 24 hours in advance. For same-day delivery, please contact us before 12:00 PM."
        },
        {
            question: "How will my order be delivered?",
            answer: "Our professional couriers deliver bouquets in specialized water packs and protective packaging to ensure they arrive in perfect condition."
        },
        {
            question: "Can I leave a note or card with my wishes?",
            answer: "Yes, you can add a personalized message during checkout, and we will include a beautiful handwritten card with your bouquet."
        }
    ];

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.offsetWidth;
        }
    }, []);

    const handleScroll = () => {
        const container = sliderRef.current;
        if (!container || isTransitioning.current) return;

        const {scrollLeft, offsetWidth} = container;
        const index = Math.round(scrollLeft / offsetWidth);

        if (index === displaySlides.length - 1) {
            isTransitioning.current = true;
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = offsetWidth;
            setCurrentIndex(1);
            setTimeout(() => {
                container.style.scrollBehavior = 'smooth';
                isTransitioning.current = false;
            }, 50);
        } else if (index === 0) {
            isTransitioning.current = true;
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = offsetWidth * (displaySlides.length - 2);
            setCurrentIndex(displaySlides.length - 2);
            setTimeout(() => {
                container.style.scrollBehavior = 'smooth';
                isTransitioning.current = false;
            }, 50);
        } else {
            setCurrentIndex(index);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current && !isTransitioning.current) {
                sliderRef.current.scrollBy({
                    left: sliderRef.current.offsetWidth,
                    behavior: 'smooth'
                });
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [displaySlides.length]);

    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-white h-[59px] flex items-center px-4">
                <div className="flex-1">
                    <button><Image src="/burger-menu.svg" alt="Menu" width={24} height={24}/></button>
                </div>
                <div className="flex-none">
                    <h1 className="font-gilda text-xl text-[#5B4733]">ALNflowers</h1>
                </div>
                <div className="flex-1 flex justify-end gap-3">
                    <button><Image src="/search.svg" alt="Search" width={24} height={24}/></button>
                    <button><Image src="/profile.svg" alt="Profile" width={24} height={24}/></button>
                    <button><Image src="/cart.svg" alt="Cart" width={24} height={24}/></button>
                </div>
            </header>

            <main className="flex-1">
                <section id="flowers-slider" className="relative h-[360px] w-full mb-4 overflow-hidden">
                    <h2 className="absolute top-16 left-10 z-20 font-gilda text-[40px] text-brand-beige2 drop-shadow-lg">ALNflowers</h2>
                    <p className="absolute bottom-12 right-5 z-20 font-gilda text-[20px] text-brand-beige3 ">designer
                        bouquets to order</p>
                    <div
                        ref={sliderRef}
                        onScroll={handleScroll}
                        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
                    >
                        {displaySlides.map((slide, i) => (
                            <div key={i} className="relative h-full w-full shrink-0 snap-center">
                                <Image src={slide.img} fill className="object-cover" alt="Flower background" priority/>
                                <div className="absolute inset-0 bg-black/10"/>
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30 items-center">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-300 h-[2px] ${
                                    (currentIndex === index + 1) ? 'w-8 bg-white' : 'w-2 bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                </section>

                <section id="flowers-pages" className="px-3 mb-4">
                    <div className="flex justify-center items-center gap-2">
                        {links.map((link) => (
                            <div key={link.id}
                                 className="shrink-0 w-[111px] h-[88px] border border-[#E5E5E5] rounded-md flex flex-col items-center justify-center gap-1">
                                <div className="relative w-8 h-8">
                                    <Image src={link.icon} alt={link.title} fill className="object-contain"/>
                                </div>
                                <span className="text-[12px] font-roboto">{link.title}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="flowers-news" className="mb-4">
                    <div className="flex justify-center items-center mb-4">
                        <h2 className="font-gilda text-[32px] py-4 text-[#5B4733]">News</h2>
                    </div>
                    <div
                        className="flex justify-center items-center gap-3 overflow-x-auto px-3 scrollbar-hide snap-x snap-mandatory">
                        {news.map((nw) => (
                            <div key={nw.id}
                                 className="shrink-0 w-[171px] snap-center border border-[#E5E5E5] rounded-lg overflow-hidden bg-white shadow-sm">
                                <div className="relative h-[164px] bg-[#F9F9F9]">
                                    <Image src={nw.icon} alt={nw.title} fill className="object-contain"/>
                                    {nw.isPopular && (
                                        <div
                                            className="absolute top-0 left-0 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-br-lg z-10">
                                            <span className="text-[10px] font-roboto text-black font-medium">Popular choice</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-3 flex flex-col gap-1">
                                    <p className="text-[14px] font-roboto text-black truncate">{nw.title}</p>
                                    <div className="flex justify-between items-center h-6">
                                        <span className="font-bold text-[18px] text-black">${nw.price}</span>
                                        <button
                                            className="w-8 h-8 bg-[#F3F0EC] rounded-full flex items-center justify-center">
                                            <Image src="/news/cart.svg" alt="Add" width={16} height={16}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="flowers-shop-occastion" className="mb-4">
                    <div className="flex flex-col px-3">
                        <div className="flex justify-start items-center mb-2">
                            <h1 className="py-4">Shop by Occasion</h1>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {occasions.map((item) => (
                                <div key={item.id}
                                     className="flex justify-start items-center h-[56px] px-3 border border-[#0000001A] rounded-md">
                                    <div className="flex items-center justify-center mr-2">
                                        <Image src={item.icon} alt={item.title} height={32} width={32}/>
                                    </div>
                                    <span className="font-roboto text-[12px] text-black">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="some-text" className="mb-4 px-3 flex flex-col">
                    <div className="flex justify-center items-center text-center py-2">
                        <h1>ALNflowers IS MORE THAN JUST BOUQUETS</h1>
                    </div>
                    <div className="py-2 flex justify-center items-center">
                        <Image src="/some-text/img.svg" alt="img" height={221} width={245}/>
                    </div>
                    <div className="py-2 px-3 max-w-[375px] w-full mx-auto flex items-center justify-center">
                        <p className="font-roboto text-center text-[10px] leading-5">
                            This is a story we write with flowers. Our mission is simple: to bring joy to people through
                            original arrangements, handcrafted with love for detail. We work only with seasonal flowers
                            and local suppliers to ensure each piece is fresh and vibrant. Our packaging is minimalist
                            and eco-friendly. We are happy to help you choose the perfect bouquet for your
                            occasion—wedding, birthday, or just because—and deliver it so the joy begins right at your
                            door.
                        </p>
                    </div>
                </section>

                <section id="cusromer-reviews" className="mb-4 px-3 flex flex-col">
                    <div className="flex justify-center items-center p-4">
                        <h1 className="text-center">Customer Reviews</h1>
                    </div>
                    <div
                        className="flex md:justify-center md:items-center gap-4 overflow-x-auto px-4 py-2 snap-x snap-mandatory">
                        {customers.map((item) => (
                            <div key={item.id}
                                 className="h-[96px] w-[220px] shrink-0 snap-center p-3 flex flex-col justify-between bg-[#ECE4DB] rounded-md">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center gap-2">
                                        <Image src="/customers/avatar.svg" alt="avatar" width={24} height={24}
                                               className="rounded-full bg-gray-300"/>
                                        <h2 className="font-roboto text-[16px] leading-6 font-medium text-black">{item.name}</h2>
                                    </div>
                                    <div className="flex gap-0.5">
                                        {[...Array(item.stars)].map((_, i) => (
                                            <Image key={i} src="/customers/star.svg" alt="star" width={14} height={14}/>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="font-roboto text-[14px] leading-snug text-black line-clamp-2">{item.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="faq" className="mb-4 px-3 flex flex-col">
                    <div className="flex justify-center items-center py-2">
                        <h1 className="font-gilda text-[32px]">FAQ</h1>
                    </div>
                    <div className="flex flex-col">
                        {faqData.map((item, index) => (
                            <FaqItem key={index} question={item.question} answer={item.answer}/>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="gap-4 py-4 px-3 flex flex-col bg-black/86">
                <div className="flex justify-center items-center">
                    <h1 className="text-center text-[36px] left-10 text-white">ALNflowers</h1>
                </div>
                <div className="flex justify-between items-center py-4">
                    <div>
                        <h1 className="text-[20px] text-white leading-none">Follow us</h1>
                    </div>
                    <div className="flex justify-end items-center gap-4">
                        <Image src="/footer/facebook.svg" alt="img" width={30} height={30}/>
                        <Image src="/footer/twitter.svg" alt="img" width={30} height={30}/>
                        <Image src="/footer/youtube.svg" alt="img" width={30} height={30}/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col py-4 gap-4">
                        <div className="flex flex-col gap-4 mb-4">
                            <h1 className="text-[20px] text-white leading-6 font-medium">Contact us</h1>
                            <h1 className="text-[16px] text-white leading-5 font-normal">123 Simply quidem</h1>
                            <h1 className="text-[16px] text-white leading-5 font-normal">The Park</h1>
                            <h1 className="text-[16px] text-white leading-5 font-normal">AB 10000</h1>
                        </div>
                        <div className="mb-4">
                            <h1 className="text-[20px] text-white leading-6 font-medium">Phone no.</h1>
                            <h1 className="text-[16px] text-white leading-5 font-normal">+1 (234) 567-8900</h1>
                        </div>
                        <div className="mb-4">
                            <h1 className="text-[20px] text-white leading-6 font-medium">Email</h1>
                            <h1 className="text-[16px] text-white leading-5 font-normal">info@alnflowers.com</h1>
                        </div>
                    </div>
                    <div className="flex flex-col p-4 gap-4">
                        <h1 className="text-[20px] text-white leading-6 font-medium">Quick links</h1>
                        <h1 className="text-[16px] text-white leading-5 font-normal">Flowers</h1>
                        <h1 className="text-[16px] text-white leading-5 font-normal">Bouquets</h1>
                        <h1 className="text-[16px] text-white leading-5 font-normal">Plants</h1>
                        <h1 className="text-[16px] text-white leading-5 font-normal">About Us</h1>
                        <h1 className="text-[16px] text-white leading-5 font-normal">FQA</h1>
                    </div>
                </div>
                <div className="">
                    <p className="text-[#FFFFFFC4]/77 text-[10px] text-center">© 2023 AlNflowers. All rights reserved.
                        <span className="underline">Privacy Policy</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
