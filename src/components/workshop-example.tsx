import Image from "next/image";

export function WorkshopExample() {
  return (
    <figure className="real-slide">
      <Image
        src="/images/budgeting-slide.png"
        width={1601}
        height={900}
        alt="Slide 12 of Alex Lam’s workshop: a $20 budgeting activity with choices including lunch, fruit, a book, and game tokens, plus spaces to plan buying, saving, and sharing."
        sizes="(max-width: 960px) 100vw, 960px"
        priority
      />
      <figcaption>From the Financial Literacy for Kids online workshop slideshow, slide 12.</figcaption>
    </figure>
  );
}
