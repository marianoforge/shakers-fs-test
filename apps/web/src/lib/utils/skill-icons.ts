const SKILL_ICON_MAP: Record<string, string> = {
  Python: '/skills/python.svg',
  Java: '/skills/java.svg',
  JavaScript: '/skills/javascript.svg',
  'C++': '/skills/cplusplus.svg',
  'C#': '/skills/csharp.svg',
  Go: '/skills/go.svg',
  Ruby: '/skills/ruby.svg',
  PHP: '/skills/php.svg',
  Swift: '/skills/swift.svg',
  Kotlin: '/skills/kotlin.svg',
  TypeScript: '/skills/typescript.svg',
  HTML: '/skills/html5.svg',
  CSS: '/skills/css3.svg',
  React: '/skills/react.svg',
  Angular: '/skills/angular.svg',
  'Vue.js': '/skills/vuejs.svg',
  'Node.js': '/skills/nodejs.svg',
  Django: '/skills/django.svg',
  Flask: '/skills/flask.svg',
  'Spring Boot': '/skills/spring.svg',
  'ASP.NET': '/skills/dotnetcore.svg',
  Docker: '/skills/docker.svg',
  Kubernetes: '/skills/kubernetes.svg',
  AWS: '/skills/amazonwebservices.svg',
  Azure: '/skills/azure.svg',
  'Google Cloud Platform (GCP)': '/skills/googlecloud.svg',
  Git: '/skills/git.svg',
  GraphQL: '/skills/graphql.svg',
  Figma: '/skills/figma.svg',
  Sketch: '/skills/sketch.svg',
  'Adobe XD': '/skills/xd.svg',
  Selenium: '/skills/selenium.svg',
  Jira: '/skills/jira.svg',
  Confluence: '/skills/confluence.svg',
  Kafka: '/skills/apachekafka.svg',
  'Apache Spark': '/skills/apachespark.svg',
  Hadoop: '/skills/hadoop.svg',
  'Next.js': '/skills/nextjs.svg',
  SQL: '/skills/postgresql.svg',
  NoSQL: '/skills/mongodb.svg',
};

export function getSkillIcon(skillName: string): string | null {
  return SKILL_ICON_MAP[skillName] ?? null;
}

export function getSkillsWithIcons(
  skillNames: string[],
): Array<{ name: string; icon: string | null }> {
  return skillNames.map((name) => ({
    name,
    icon: getSkillIcon(name),
  }));
}
