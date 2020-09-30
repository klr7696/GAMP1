<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\LivreCompteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=LivreCompteRepository::class)
 */
class LivreCompte
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date_immutable")
     */
    private $anneeRef;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $decretLivre;

    /**
     * @ORM\Column(type="date_immutable")
     */
    private $adoptionDate;

    /**
     * @ORM\Column(type="date_immutable")
     */
    private $executionDate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $descriptionLivre;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $creationAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $modifAt;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isActiver;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isNonSupprimable;

    /**
     * @ORM\OneToMany(targetEntity=LigneDepense::class, mappedBy="livreCompte", orphanRemoval=true)
     */
    private $ligneDepenses;

    public function __construct()
    {
        $this->ligneDepenses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAnneeRef(): ?\DateTimeImmutable
    {
        return $this->anneeRef;
    }

    public function setAnneeRef(\DateTimeImmutable $anneeRef): self
    {
        $this->anneeRef = $anneeRef;

        return $this;
    }

    public function getDecretLivre(): ?string
    {
        return $this->decretLivre;
    }

    public function setDecretLivre(string $decretLivre): self
    {
        $this->decretLivre = $decretLivre;

        return $this;
    }

    public function getAdoptionDate(): ?\DateTimeImmutable
    {
        return $this->adoptionDate;
    }

    public function setAdoptionDate(\DateTimeImmutable $adoptionDate): self
    {
        $this->adoptionDate = $adoptionDate;

        return $this;
    }

    public function getExecutionDate(): ?\DateTimeImmutable
    {
        return $this->executionDate;
    }

    public function setExecutionDate(\DateTimeImmutable $executionDate): self
    {
        $this->executionDate = $executionDate;

        return $this;
    }

    public function getDescriptionLivre(): ?string
    {
        return $this->descriptionLivre;
    }

    public function setDescriptionLivre(?string $descriptionLivre): self
    {
        $this->descriptionLivre = $descriptionLivre;

        return $this;
    }

    public function getCreationAt(): ?\DateTimeImmutable
    {
        return $this->creationAt;
    }

    public function setCreationAt(\DateTimeImmutable $creationAt): self
    {
        $this->creationAt = $creationAt;

        return $this;
    }

    public function getModifAt(): ?\DateTimeInterface
    {
        return $this->modifAt;
    }

    public function setModifAt(?\DateTimeInterface $modifAt): self
    {
        $this->modifAt = $modifAt;

        return $this;
    }

    public function getIsActiver(): ?bool
    {
        return $this->isActiver;
    }

    public function setIsActiver(bool $isActiver): self
    {
        $this->isActiver = $isActiver;

        return $this;
    }

    public function getIsNonSupprimable(): ?bool
    {
        return $this->isNonSupprimable;
    }

    public function setIsNonSupprimable(bool $isNonSupprimable): self
    {
        $this->isNonSupprimable = $isNonSupprimable;

        return $this;
    }

    /**
     * @return Collection|LigneDepense[]
     */
    public function getLigneDepenses(): Collection
    {
        return $this->ligneDepenses;
    }

    public function addLigneDepense(LigneDepense $ligneDepense): self
    {
        if (!$this->ligneDepenses->contains($ligneDepense)) {
            $this->ligneDepenses[] = $ligneDepense;
            $ligneDepense->setLivreCompte($this);
        }

        return $this;
    }

    public function removeLigneDepense(LigneDepense $ligneDepense): self
    {
        if ($this->ligneDepenses->contains($ligneDepense)) {
            $this->ligneDepenses->removeElement($ligneDepense);
            // set the owning side to null (unless already changed)
            if ($ligneDepense->getLivreCompte() === $this) {
                $ligneDepense->setLivreCompte(null);
            }
        }

        return $this;
    }
}
