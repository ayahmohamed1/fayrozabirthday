import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './VideoPage.module.css';

export default function VideoPage({ content, back }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // دالة للتحكم في تشغيل وإيقاف الفيديو عند الضغط
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {content.video?.title || "Press to Play 🎥"}
        </motion.h2>

        <motion.div 
          className={styles.videoFrame}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.tape}></div>
          
          {/* ضفنا onClick هنا عشان لما تدوس في أي حتة يشتغل أو يقف */}
          <div className={styles.videoInner} onClick={handlePlayPause}>
            <video
              ref={videoRef}
              src={content.video?.src}
              className={styles.videoPlayer}
              poster={content.video?.poster}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              controls={isPlaying} // الـ controls هتظهر بس لما الفيديو يشتغل
            >
              Your browser does not support the video tag.
            </video>

            {/* زرار التشغيل اللي في النص */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  className={styles.playOverlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.playButton}>
                    {/* أيقونة Play (ممكن تبدلها بـ SVG لو حابب) */}
                    ▶
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <button className="btn-return" onClick={back}>
            RETURN
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}