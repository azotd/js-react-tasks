import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default function MarkdownEditor({ onContentChange }) {
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    // Инициализируем плагин при монтировании компонента, передавая ему DOM-элемент
    const editor = new Editor({
      el: rootRef.current,
      hideModeSwitch: true,
    });

    // Навешиваем событие изменения содержимого
    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });

    // Опционально: функция очистки, если библиотека поддерживает метод уничтожения или удаления инстанса
  }, [onContentChange]);

  return <div ref={rootRef} />;
}
// END

