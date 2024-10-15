export default function Person({ name, profilePath }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[150px]">
                <img 
                    className="rounded-xl w-full h-auto object-cover bg-gray-200 flex items-center justify-center text-center"
                    src={`https://image.tmdb.org/t/p/w200/${profilePath}`}
                    alt={name}
                />
            </div>
            <p>{name}</p>
        </div>
    );
}
