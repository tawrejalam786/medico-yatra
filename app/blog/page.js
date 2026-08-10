import BlogCategoriesSection from "@/components/blog/BlogCategoriesSection";
import BlogContentSection from "@/components/blog/BlogContentSection";
import BlogHero from "@/components/blog/BlogHero";

const BlogPage = () =>{
    const blogsPage = (
        <>
            <BlogHero />

            <BlogContentSection />

            <BlogCategoriesSection />
        </>
    );
    return blogsPage;
}

export default BlogPage;