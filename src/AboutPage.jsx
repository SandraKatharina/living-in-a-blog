function AboutPage() {
  return (
    <div className="bg-desert px-3">
      <section className="p-4">
        <h1 className="text-2xl">About––</h1>
        <h2 className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          aperiam sapiente earum maiores facere voluptate ut in aut ipsam quas
          harum ducimus alias eius perferendis, sit nam adipisci voluptatibus
          esse.
        </h2>
      </section>
      <hr />
      <p className="mx-4 border-y border-black p-2 text-center">
        meet the author
      </p>
      <hr />
      <section>
        <div className="p-4">
          <div className="flex justify-around">
            <img
              className="h-100 w-60 rounded-full object-cover object-center"
              src="/img/sandra-schollmeyer-artist-and-researcher.jpg"
              alt="Sandra Schollmeyer"
            />
          </div>
          <h1 className="p-2 text-2xl">
            Sandra–– weaver of color, textile sculptor and researcher
          </h1>
          <div className="text-right">
            <p className="text-sm text-midnight">Thailand</p>
            <p className="text-xs">December 2019</p>
          </div>
          <p className="p-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium nisi, non incidunt iste culpa quas cumque placeat ut
            perferendis cum officiis, itaque minima dignissimos blanditiis, ab
            cupiditate. Error, magni velit! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Neque deserunt est atque perspiciatis
            quae sint? Mollitia veniam, sapiente hic ullam ad recusandae? Alias
            ipsum at explicabo commodi, atque iste est.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
