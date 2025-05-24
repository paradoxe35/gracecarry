import { useTranslations } from "next-intl";
import Image from "next/image";

export default function InstaFeeds(){
  const t = useTranslations("HomePage");
    return <>
        <section className="py-16">
                <div className="g-container text-center">
                  <h2 className="g-heading text-3xl mb-4">{t("instagramHeading")}</h2>
                  <p className="text-neutral-700 max-w-2xl mx-auto mb-8">
                    {t("instagramHandle")}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <a
                        key={item}
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-square overflow-hidden group"
                      >
                        <Image
                          src={`https://source.unsplash.com/random/300x300?fashion&sig=${item}`}
                          alt={t("instagramImageAlt")}
                          fill
                          style={{ objectFit: "cover" }}
                          className="group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
    </>
}