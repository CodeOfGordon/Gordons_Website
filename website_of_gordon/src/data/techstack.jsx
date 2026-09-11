// https://react-icons.github.io/react-icons/
import {
  SiApachekafka,
  SiApachespark,
  SiC,
  SiCplusplus,
  SiDask,
  SiDatabricks,
  SiDbt,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGnubash,
  SiGoogleappsscript,
  SiHuggingface,
  SiJavascript,
  SiJira,
  SiLangchain,
  SiLinux,
  SiNestjs,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiQt,
  SiR,
  SiReact,
  SiSalesforce,
  SiScikitlearn,
  SiSnowflake,
  SiSqlalchemy,
  SiSwagger,
  SiTypescript,
  SiZapier,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaDocker, FaFileExcel } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { LuFactory } from "react-icons/lu";
import { BsBarChartFill } from "react-icons/bs";
import { TbCirclesRelation, TbWindmill } from "react-icons/tb";

export const languages = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "R", icon: SiR },
  { name: "SQL", icon: SiPostgresql },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Apex", icon: SiSalesforce },
  { name: "Google Apps Script", icon: SiGoogleappsscript },
];

export const frameworks_libraries = [
  { name: "React", icon: SiReact },
  { name: "PyQt", icon: SiQt },
  { name: "Express", icon: SiExpress },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "NestJS", icon: SiNestjs },
  { name: "SQLAlchemy", icon: SiSqlalchemy },
  { name: "Pandas", icon: SiPandas },
  { name: "Dask", icon: SiDask },
  { name: "PySpark", icon: SiApachespark },
  { name: "dbt", icon: SiDbt },
  { name: "Airflow", icon: TbWindmill },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "LangChain", icon: SiLangchain },
  { name: "ChromaDB", icon: TbCirclesRelation },
];

export const tools = [
  { name: "Azure", icon: VscAzure },
  { name: "Power BI", icon: BsBarChartFill },
  { name: "ADF", icon: LuFactory },
  { name: "Databricks", icon: SiDatabricks },
  { name: "Snowflake", icon: SiSnowflake },
  { name: "Apache Kafka", icon: SiApachekafka },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: SiGit },
  { name: "Bash", icon: SiGnubash },
  { name: "Linux", icon: SiLinux },
  { name: "Jira", icon: SiJira },
  { name: "Swagger", icon: SiSwagger },
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Zapier", icon: SiZapier },
  { name: "Excel", icon: FaFileExcel },
];
