import { Instagram } from 'lucide-react';

const instagramPosts = [
    {
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400",
        likes: "2.4k",
        comments: "128"
    },
    {
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
        likes: "1.8k",
        comments: "96"
    },
    {
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400",
        likes: "3.2k",
        comments: "156"
    },
    {
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=400",
        likes: "2.1k",
        comments: "112"
    }
];

const InstagramFeed = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us on Instagram</h2>
                    <p className="text-gray-600">@smokeybrand</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {instagramPosts.map((post, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={post.image}
                                alt={`Instagram post ${index + 1}`}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="text-white text-center">
                                    <div className="flex items-center justify-center mb-2">
                                        <Instagram className="w-5 h-5 mr-2" />
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="text-sm">{post.comments} comments</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed; 