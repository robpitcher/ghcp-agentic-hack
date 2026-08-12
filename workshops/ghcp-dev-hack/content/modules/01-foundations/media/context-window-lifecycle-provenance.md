# Context Window Lifecycle Video Provenance

## Approval and teaching role

- Asset id: `context-window-lifecycle`
- Slide: 22, `Context Lifecycle: Pack, Detect Drift, Recover`
- Source provider: OpenArt
- Source owner: workshop owner
- Authorization: the workshop owner confirmed on 2026-08-09 that they generated
  the three clips and authorized repository storage and intended workshop use
  (release/deployment/publication gates remain separate)
- Teaching role: play the context packing, drift, and recovery sequence once
  with its original audio after the presenter clicks play
- Poster: `assets/images/foundations/context-lifecycle-static-plate.png`
- Delivery: `assets/videos/foundations/context-window-lifecycle.mp4` through Git
  LFS

The original OpenArt model, prompt, generation date, and prompt hash were not
provided. This record does not infer or fabricate those values.

## Ordered source chain

| Order | Source filename | Bytes | SHA-256 | Duration |
|---:|---|---:|---|---:|
| 1 | `ContextWindow1.mp4` | 4,998,075 | `8bc499b595ccfec74a525458e899ca635fa165d80b0d3b55fa9cc486b7425975` | 10.053991 s |
| 2 | `ContextWindow2.mp4` | 4,227,267 | `064789a7faa0474e1cd0eef344d25de7169cf597533074f354133fd9c2b5c136` | 12.050998 s |
| 3 | `ContextWindow3.mp4` | 2,790,937 | `3af7687378626b50a6662057a18943204eab3cd270eb898e7e6960d85e11e95b` | 8.057007 s |

All three inputs are 1280x720, 24 fps H.264 video with 44.1 kHz stereo AAC
audio. The raw source clips are not part of the canonical committed asset set;
their hashes preserve the reviewed input identity.

## Assembly

- Tool: FFmpeg 8.1.2 full build from the pinned `Gyan.FFmpeg` WinGet package
- Video: concatenated in the listed order with H.264 stream copy
- Audio: decoded and re-encoded to 128 kbps AAC with
  `aresample=async=1:first_pts=0` because the source clips reset audio timestamps
  at both joins
- Container: MP4 with the `moov` atom moved to the front for web playback
- Output duration: 30.186009 seconds
- Output bytes: 11,951,909
- Output SHA-256:
  `a51b2e108bb4c55efd615391f38ae979edf00478408baf21659aa9b7d6d75f4d`

The assembled file decodes without FFmpeg errors. Browser playback is
presenter-controlled with audio enabled, visible controls, no autoplay, and no
loop.
