import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from "@mui/material"
import { GitHub, Launch } from "@mui/icons-material"

function ProjectCard({ project }) {
  const { title, description, image, technologies, githubUrl, liveUrl, featured = false } = project

  return (
    <Card
      className={`h-full flex flex-col transition-transform duration-300 hover:scale-105 ${
        featured ? "ring-2 ring-primary-500" : ""
      }`}
      elevation={featured ? 4 : 2}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={`${title} project screenshot`}
        className="h-48 object-cover"
      />
      <CardContent className="flex-grow flex flex-col">
        <div className="flex-grow">
          {featured && <Chip label="Featured" color="primary" size="small" className="mb-2" />}
          <Typography variant="h5" component="h3" className="font-semibold mb-2">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mb-4 line-clamp-3">
            {description}
          </Typography>
        </div>

        <Box className="mb-4">
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <Chip key={index} label={tech} size="small" variant="outlined" className="text-xs" />
            ))}
          </div>
        </Box>

        <div className="flex gap-2 mt-auto">
          {githubUrl && (
            <Button
              variant="outlined"
              size="small"
              startIcon={<GitHub />}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
            >
              Code
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="contained"
              size="small"
              startIcon={<Launch />}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
            >
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
