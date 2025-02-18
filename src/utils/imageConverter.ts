import heicConvert from "heic-convert";

export async function convertHeicToJpeg(heicBuffer: Buffer): Promise<Buffer> {
  try {
    const jpegBuffer = await heicConvert({
      buffer: heicBuffer.buffer,
      format: "JPEG",
      quality: 0.9,
    });
    return Buffer.from(jpegBuffer);
  } catch (error) {
    console.error("Error converting HEIC to JPEG:", error);
    throw error;
  }
}
