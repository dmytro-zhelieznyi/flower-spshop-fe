import Image from "next/image";

export default function Home() {
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

    return (
        <div className="min-h-screen flex flex-col border-1 border-black">
            {/* HEADER (Топ-бар) */}
            <header className="sticky top-0 z-50 bg-white/25 backdrop-blur-sm h-[59px] flex items-center px-2 py-4">
                <div className="flex-1 flex justify-start">
                    <button>
                        <Image src="/burger-menu.svg" alt="Menu" width={24} height={24} priority/>
                    </button>
                </div>

                {/* 2. ЦЕНТР (Логотип) */}
                {/* flex-none значит, что блок занимает ровно столько места, сколько нужно тексту */}
                <div className="flex-none">
                    <h1>ALNflowers</h1>
                </div>

                {/* 3. ПРАВАЯ ЧАСТЬ (Поиск, Человечек, Корзина) */}
                {/* flex-1 здесь уравновешивает левую часть, justify-end прижимает иконки к правому краю */}
                <div className="flex-1 flex justify-end gap-2">
                    <button>
                        <Image src="/search.svg" alt="Search" width={24} height={24} priority/>
                    </button>
                    <button>
                        <Image src="/profile.svg" alt="Profile" width={24} height={24} priority/>
                    </button>
                    <button>
                        <Image src="/cart.svg" alt="Cart" width={24} height={24} priority/>
                    </button>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-1">
                {/* 1. Hero Section */}
                <section id="flowers-slider" className="relative h-[360px] w-full mb-4">
                    {/* Контейнер слайдера */}
                    <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory">
                        {/* Слайд 1 */}
                        <div className="relative h-full w-full shrink-0 snap-center">
                            <Image src="/img/flower.svg" fill className="object-cover" alt="Slide 1" priority/>
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                                <h2 className="font-gilda text-[48px] text-[#5B4733]">ALNflowers</h2>
                                <p className="font-gilda text-[18px] text-[#5B4733]/80">designer bouquets to order</p>
                            </div>
                        </div>

                        {/* Слайд 2 */}
                        <div className="relative h-full w-full shrink-0 snap-center">
                            <Image src="/img/flower.jpg" fill className="object-cover" alt="Slide 1" priority/>
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                                <h2 className="font-gilda text-[48px] text-[#5B4733]">ALNflowers</h2>
                                <p className="font-gilda text-[18px] text-[#5B4733]/80">designer bouquets to order</p>
                            </div>
                        </div>

                        {/* Слайд 3 */}
                        <div className="relative h-full w-full shrink-0 snap-center">
                            <Image src="/img/flower.jpg" fill className="object-cover" alt="Slide 1" priority/>
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                                <h2 className="font-gilda text-[48px] text-[#5B4733]">ALNflowers</h2>
                                <p className="font-gilda text-[18px] text-[#5B4733]/80">designer bouquets to order</p>
                            </div>
                        </div>

                        {/* Слайд 4 */}
                        <div className="relative h-full w-full shrink-0 snap-center">
                            <Image src="/img/flower.jpg" fill className="object-cover" alt="Slide 1" priority/>
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                                <h2 className="font-gilda text-[48px] text-[#5B4733]">ALNflowers</h2>
                                <p className="font-gilda text-[18px] text-[#5B4733]/80">designer bouquets to order</p>
                            </div>
                        </div>
                    </div>

                    {/* Точки (Индикаторы) — статичные */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        <div className="w-8 h-[2px] bg-white"></div>
                        <div className="w-1 h-[2px] bg-white/40"></div>
                        <div className="w-1 h-[2px] bg-white/40"></div>
                        <div className="w-1 h-[2px] bg-white/40"></div>
                    </div>
                </section>


                {/* 2. Features / Advantages (Преимущества) */}
                <section id="page-links" className="h-[88px] px-4 mb-4">
                    <div className="flex h-full w-full gap-1">
                        {links.map((link) => (
                            <div key={link.id}
                                 className="shrink-0 w-[111px] border border-[#E5E5E5] rounded-md flex flex-col items-center justify-center"
                            >
                                {/* Иконка */}
                                <div className="relative w-12 h-12">
                                    <Image src={link.icon} alt={link.title} fill/>
                                </div>
                                {/* Текст (настройки из твоей Figma) */}
                                <p className="font-roboto text-[12px] leading-[20px] text-black text-center">
                                    {link.title}
                                </p>
                            </div>
                        ))}

                    </div>
                </section>


                {/* 3. Catalog Preview (Популярные букеты) */}
                <section id="catalog-preview" className="h-[300px] w-full mb-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-center items-center">
                            <h1 className="py-4">News</h1>
                        </div>
                        <div className="flex h-[224px] w-full gap-1 overflow-x-auto snap-x snap-mandatory">
                            {news.map((nw) => (
                                <div key={nw.id}
                                     className="flex-shrink-0 w-[171px] snap-center border border-[#E5E5E5] rounded-(--radius-card) overflow-hidden bg-white"
                                >
                                    <div className="relative h-[164px] w-full bg-[#F9F9F9]">
                                        <Image
                                            src={nw.icon}
                                            alt={nw.title}
                                            fill
                                        />
                                        {nw.isPopular && (
                                            <div
                                                className="absolute top-0 left-0 bg-black/5 backdrop-blur-sm px-2 py-1 rounded-br-lg z-20">
                                                <span
                                                    className="text-[10px] font-roboto text-black">Popular choice</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-2 flex flex-col gap-1">
                                        <p className="font-roboto text-[12px] text-black">
                                            {nw.title}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <p className="font-roboto text-[16x] font-bold text-black">
                                                ${nw.price}
                                            </p>
                                            <button className="">
                                                <Image
                                                    src="/news/cart.svg"
                                                    alt="Add to cart"
                                                    width={24}
                                                    height={24}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* 4. About Us (О компании) */}
                <section id="about" className="py-12 px-4">
                    {/* Текст и, возможно, красивое фото интерьера магазина */}
                </section>

                {/* 5. How it Works (Как заказать) */}
                <section id="steps" className="py-12 px-4 bg-gray-50">
                    {/* 1. Выберите -> 2. Оплатите -> 3. Доставим */}
                </section>

                {/* 6. Reviews (Отзывы) */}
                <section id="reviews" className="py-12 px-4">
                    {/* Слайдер или сетка с отзывами клиентов */}
                </section>

                {/* 7. CTA / Newsletter (Призыв к действию) */}
                {/* Та самая форма "Create Free Account" или подписка на скидки */}
                <section id="cta" className="py-16 px-4 bg-black text-white">
                    {/* Твоя форма регистрации здесь */}
                </section>
            </main>

            {/* FOOTER */}
            <footer>
                <h1>Footer</h1>
            </footer>

        </div>
    );
}