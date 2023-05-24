import Image from 'next/image';

const ImageText = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center  lg:my-24 lg:items-start justify-center max-w-6xl mx-auto py-8 px-4 lg:px-0">
            <div className="lg:mr-8 w-full my-4 lg:w-1/2">
                <Image
                    src="https://media.discordapp.net/attachments/972456002844766228/1097039989092646933/photo-1564121211835-e88c852648ab.png?width=1554&height=1036"
                    alt="Image"
                    width={500}
                    height={500}
                    className="rounded-md"
                />
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Share Your Story</h1>
                <p className="text-lg leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    augue ut ex laoreet, quis tempus tellus interdum. Nullam semper nisl
                    mauris, vitae pharetra augue dictum in. Suspendisse potenti. Proin
                    commodo mauris vitae dapibus luctus. Nullam efficitur, ipsum in
                    bibendum semper, augue nisl facilisis lectus, a finibus justo nisl id
                    dolor. Vestibulum in maximus justo, non pharetra augue. Nulla facilisi.
                    Sed dignissim, libero vel aliquam eleifend, eros risus luctus augue,
                    id eleifend lacus quam id dolor. Aliquam at diam vel enim varius
                    commodo. Duis pretium aliquam semper. Proin gravida sem vel nisl
                    faucibus, non tristique nulla scelerisque. Vestibulum eget fermentum
                    ipsum. Aenean ultrices nisl nec augue vehicula, ac consectetur eros
                    rhoncus.
                </p>
            </div>
        </div>
    );
};

export default ImageText;
