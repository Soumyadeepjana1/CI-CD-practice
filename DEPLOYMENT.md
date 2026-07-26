# EC2 Deployment Setup

This project automatically deploys to EC2 via GitHub Actions when code is pushed to main/master branch.

## Required GitHub Secrets

Add these secrets in your GitHub repository settings (Settings → Secrets and variables → Actions):

### Docker Hub Secrets
- `DOCKER_USERNAME` - `soumyadeep7872`
- `DOCKER_PASSWORD` - Your Docker Hub access token

### EC2 Secrets
- `EC2_PUBLIC_IP` - Your EC2 public IP address: `72.44.40.216`
- `EC2_SSH_PRIVATE_KEY` - The private SSH key to access your EC2 instance

## EC2 Instance Details

- **Instance ID**: i-09e7250c7a54b51b2
- **Public IPv4**: 72.44.40.216
- **Private IPv4**: 172.31.34.110
- **Public DNS**: ec2-72-44-40-216.compute-1.amazonaws.com
- **Instance Type**: t3.micro
- **Region**: us-east-1

## EC2 Instance Requirements

Your EC2 instance must have:
1. Docker installed
2. Port 3000 open in security group
3. SSH access enabled
4. User `ubuntu` with sudo privileges

## Deployment Process

When you push to main/master:
1. Build and test the application
2. Push Docker image to Docker Hub
3. SSH into EC2 instance
4. Pull latest Docker image
5. Stop and remove old container
6. Start new container with latest image
7. Verify deployment

## Manual Deployment Commands

If you need to deploy manually:

```bash
# SSH into EC2
ssh -i your-key.pem ubuntu@72.44.40.216
# Or using Public DNS
ssh -i your-key.pem ubuntu@ec2-72-44-40-216.compute-1.amazonaws.com

# Pull latest image
sudo docker pull soumyadeep7872/hello-soumyadeep:latest

# Stop existing container
sudo docker stop hello-soumyadeep-app
sudo docker rm hello-soumyadeep-app

# Run new container
sudo docker run -d -p 3000:3000 --name hello-soumyadeep-app --restart unless-stopped soumyadeep7872/hello-soumyadeep:latest
```

## Access Application

After deployment, access the application at:
- http://72.44.40.216:3000
- http://ec2-72-44-40-216.compute-1.amazonaws.com:3000
