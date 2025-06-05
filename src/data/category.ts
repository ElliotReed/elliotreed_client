import defaultImage from "@images/scores/default.png";
import audioProdutionImage from "@images/equipment/mixing-board.jpg";
import audioRecordingImage from "@images/equipment/condenser-microphone-in-a-studio.jpg";
import guitarImage from "@images/musicians/Tchavolo_Schmitt_&_Steeve_Laffont.jpg";
import notationImage from "@images/scores/musescore.png";
import scoringImage from "@images/scores/bw-score-fade-to-distance.jpg";
import singingImage from "@images/musicians/boy-singing-loud.jpg";

export interface Category {
    id: string;
    title: string;
    quote: string;
    quoteAuthor: string;
    blurb: string;
    image: ImageMetadata; // Astro's image metadata type
}

export const categoryList: Category[] = [
    {
        id: "audio-production",
        title: "Audio Production",
        quote: "A good producer brings out the song that’s hiding inside the sound.",
        quoteAuthor: "Rick Rubin",
        blurb:
            "Audio production is the process of shaping and refining sound. It includes editing, mixing, and polishing musical ideas into a final form — where creative decisions and technical expertise converge.",
        image: audioProdutionImage,
    },
    {
        id: "audio-recording",
        title: "Audio Recording",
        quote: "Recording is the art of capturing the moment — with all its flaws and magic.",
        quoteAuthor: "Brian Eno",
        blurb:
            "Audio recording is the technical and creative process of capturing sound. Whether in a studio or live setting, it's where performance meets preservation, enabling music to be shared, studied, or transformed.",
        image: audioRecordingImage,
    },
    {
        id: "guitar",
        title: "Guitar",
        quote: "Sometimes you want to give up the guitar, you’ll hate the guitar. But if you stick with it, you’re gonna be rewarded.",
        quoteAuthor: "Jimi Hendrix",
        blurb:
            "Guitar is one of the most expressive and versatile instruments in modern music. From fingerstyle to distortion, it bridges rhythm and melody in countless genres and styles.",
        image: guitarImage,
    },
    {
        id: "notation",
        title: "Notation",
        quote: "Without notation, music is just a fleeting moment. With it, it's a legacy.",
        quoteAuthor: "Leonard Bernstein",
        blurb:
            "Notation is the visual language of music — a way to preserve and communicate musical ideas. Whether for performance or analysis, it turns sound into symbol, and intention into instruction.",
        image: notationImage,
    },
    {
        id: "scoring",
        title: "Scoring",
        quote: "Music is what feelings sound like — arranging is how we give them shape.",
        quoteAuthor: "Anonymous",
        blurb:
            "Scoring is the craft of adapting or composing a musical idea for a specific performance, ensemble, or style. It bridges creativity and structure by deciding how parts are distributed, harmonies built, and textures created.",
        image: scoringImage,
    },
    {
        id: "singing",
        title: "Singing",
        quote: "The only thing better than singing is more singing.",
        quoteAuthor: "Ella Fitzgerald",
        blurb:
            "Singing is the art of expressing emotion, story, and rhythm through the human voice. It connects breath, tone, and language into something both deeply personal and universally understood. Whether performed solo or in harmony, with technique or raw feeling, singing is where music begins — and often, where it moves us most.",
        image: singingImage,
    },
];


export const categoryMap = Object.fromEntries(
    categoryList.map((category) => [category.id, category])
);

export const validCategoryIds = categoryList.map(({ id }) => id) as [string, ...string[]];
