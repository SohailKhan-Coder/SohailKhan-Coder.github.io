"""Regenerate project WebP assets from the retained originals (requires Pillow)."""
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parent.parent
original_total = preview_total = thumbnail_total = 0
for source in sorted((root / 'src/assets/images').glob('*.jpg')):
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        print(f'{source.name}: {original.format} {image.size}')
        original_total += source.stat().st_size
        for width, suffix in [(1376, ''), (640, '-640')]:
            resized = image.copy()
            resized.thumbnail((width, width), Image.Resampling.LANCZOS)
            target = source.with_name(source.stem + suffix + '.webp')
            resized.save(target, 'WEBP', quality=82, method=6)
            if suffix:
                thumbnail_total += target.stat().st_size
            else:
                preview_total += target.stat().st_size
print(f'Bytes: originals={original_total}, previews={preview_total}, thumbnails={thumbnail_total}')
