
import Tag from "./Tag";

interface TagsSwiperProps {
  tags: string[];
}

export default function TagsSwiper({ tags }: TagsSwiperProps) {
  return (
    <div
      className="tagsSwiper mySwiper h-10 max-[550px]:h-8 flex gap-2 items-center"
    >
      {tags.map((elem, index) => (
        <Tag key={index} className='!px-2'>{elem}</Tag>
      ))}
    </div>
  );
}
