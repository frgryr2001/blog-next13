import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';
import Image from 'next/image';
export default function PostBody({ body }: { body: string }) {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      const typedDomNode = domNode as Element;
      if (typedDomNode instanceof Element && typedDomNode.attribs) {
        if (typedDomNode.name === 'img') {
          const { src, alt } = typedDomNode.attribs;
          if (src.startsWith('https')) {
            return (
              <Image
                src={src}
                alt={alt}
                width={1280}
                height={620}
                className="object-left-bottom object-cover h-auto w-full rounded-md my-3 max-h-[300px] md:max-h-[500px]"
              />
            );
          }
          if (src.startsWith('chrome-extension')) {
            return <></>;
          }
        }
      }
    },
  };
  const getParsedHtml = (html: string) => {
    return parse(html, options);
  };
  return <div className="rich-text">{getParsedHtml(body)}</div>;
}
