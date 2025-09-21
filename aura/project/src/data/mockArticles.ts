import { Article } from '../types';

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "The Science of Mindfulness: How It Changes Your Brain",
    summary: "New research reveals how mindfulness practices physically reshape the brain and improve mental health.",
    content: "Recent neuroscience research has demonstrated that regular mindfulness meditation practice can lead to structural changes in the brain. Studies using MRI scans show increased gray matter in regions responsible for learning, memory, and emotional regulation. These physical changes correlate with improvements in focus, stress management, and overall mental wellbeing. The study conducted at Harvard Medical School found that just eight weeks of mindfulness practice led to measurable changes in the amygdala, the brain region responsible for fear and stress responses. 'These findings are significant because they show that we can actually train our brains to respond differently to stress,' explains Dr. Sarah Collins, the lead researcher.",
    imageUrl: "https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Dr. Sarah Collins",
    source: "Neuroscience Today",
    date: "2025-02-15",
    url: "#",
    isSaved: false,
    category: "mental health"
  },
  {
    id: "2",
    title: "Understanding Anxiety: From Symptoms to Solutions",
    summary: "A comprehensive guide to recognizing anxiety symptoms and evidence-based approaches to managing them.",
    content: "Anxiety disorders affect approximately 18% of the population, making them the most common mental health conditions worldwide. While occasional anxiety is a normal part of life, persistent, excessive worry can interfere with daily activities and relationships. This article explores the physical and psychological symptoms of anxiety, from racing thoughts and restlessness to sleep disturbances and panic attacks. It also reviews the latest evidence-based treatments, including cognitive-behavioral therapy, mindfulness practices, lifestyle modifications, and medication options. Experts emphasize that early intervention typically leads to better outcomes, with most people seeing significant improvement with proper treatment.",
    imageUrl: "https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "James Wilson, PhD",
    source: "Mental Health Journal",
    date: "2025-01-28",
    url: "#",
    isSaved: false,
    category: "anxiety"
  },
  {
    id: "3",
    title: "Sleep Quality Linked to Risk of Depression, New Study Finds",
    summary: "Research reveals the strong connection between sleep patterns and mental health outcomes.",
    content: "A groundbreaking longitudinal study following 10,000 participants over five years has found that poor sleep quality significantly increases the risk of developing depression. Researchers at the Sleep and Neuroscience Institute documented that individuals with consistent sleep disturbances were three times more likely to experience depressive episodes compared to those with healthy sleep patterns. The study controlled for factors like pre-existing health conditions, lifestyle, and socioeconomic status. 'We've long known that depression can cause sleep problems, but this research clearly demonstrates that the relationship works in both directions,' said lead researcher Dr. Michael Chen. The findings suggest that sleep interventions could play an important role in preventing and treating depression.",
    imageUrl: "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Dr. Michael Chen",
    source: "Journal of Psychiatric Research",
    date: "2025-03-10",
    url: "#",
    isSaved: false,
    category: "sleep"
  },
  {
    id: "4",
    title: "Digital Detox: How Taking Breaks From Technology Improves Mental Health",
    summary: "Research shows that planned breaks from digital devices can reduce anxiety and improve focus.",
    content: "In our constantly connected world, the concept of 'digital detox' is gaining scientific support. A recent study from the University of California involved 200 participants who took a 72-hour break from all digital devices. Researchers measured significant decreases in cortisol (the stress hormone) levels, improved sleep quality, and increased face-to-face social interactions. Participants also reported feeling more present and focused, with many describing a sense of 'mental clarity' after the detox period. 'Even short breaks from technology can provide meaningful benefits,' explains digital wellness expert Lisa Montgomery. The researchers recommend starting with small periods of disconnection, such as technology-free meals or device-free evenings, before attempting longer detox periods.",
    imageUrl: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Lisa Montgomery",
    source: "Digital Wellness Institute",
    date: "2025-02-05",
    url: "#",
    isSaved: false,
    category: "technology"
  },
  {
    id: "5",
    title: "Exercise as Effective as Medication for Mild to Moderate Depression",
    summary: "New clinical trials confirm that regular physical activity can be as beneficial as antidepressants for some patients.",
    content: "A large-scale clinical trial comparing exercise interventions with antidepressant medication has found comparable effectiveness for patients with mild to moderate depression. The study, conducted across 15 medical centers, randomly assigned 600 patients to either a structured exercise program, standard antidepressant treatment, or a combination of both. After 12 weeks, both the exercise-only and medication-only groups showed similar improvements in depression scores, with the combination treatment showing slightly better results. 'This doesn't mean people should stop taking prescribed antidepressants,' cautions Dr. Robert Johnson, the study's principal investigator. 'But it does give patients and clinicians another evidence-based option, particularly for those who experience medication side effects or prefer non-pharmaceutical approaches.'",
    imageUrl: "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Dr. Robert Johnson",
    source: "American Journal of Psychiatry",
    date: "2025-01-15",
    url: "#",
    isSaved: false,
    category: "exercise"
  },
  {
    id: "6",
    title: "The Gut-Brain Connection: How Your Microbiome Affects Mental Health",
    summary: "Emerging research on the relationship between gut bacteria and psychological wellbeing.",
    content: "Scientists are uncovering increasingly strong evidence for the 'gut-brain axis' - the biochemical signaling that takes place between the gastrointestinal tract and the central nervous system. Recent studies have found correlations between gut microbiome composition and mental health conditions including depression, anxiety, and even neurodevelopmental disorders. A team at the University of Toronto has identified specific bacterial strains that appear to influence the production of neurotransmitters like serotonin and GABA, which play crucial roles in mood regulation. 'The gut microbiome is essentially a newly discovered organ that significantly impacts our mental health,' explains Dr. Elena Rodriguez, a gastroenterologist specializing in the gut-brain connection. Dietary interventions, probiotics, and lifestyle changes that support gut health are being studied as potential complementary approaches to traditional mental health treatments.",
    imageUrl: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Dr. Elena Rodriguez",
    source: "Microbiome Science",
    date: "2025-03-05",
    url: "#",
    isSaved: false,
    category: "nutrition"
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return mockArticles.find(article => article.id === id);
};